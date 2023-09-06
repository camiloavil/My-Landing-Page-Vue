import axios from 'axios'
const repo_filter='open source';
const endPoint_examplePic = 'https://pic.camiloavil.com/pictures/example/'
// const endPoint_author = 'https://pic.camiloavil.com/author/'
const endPoint_githubUsers = 'https://api.github.com/users/'
const endPoint_rawGithub = 'https://raw.githubusercontent.com/'
export default {
    /**
     * Retrieves content from the GitHub API based on a user's name.
     *
     * @param {string} name - The name of the user.
     * @return {Promise<Array>} A promise that resolves to an array of mapped data.
     */
    async getContent(name) {
        try {
            const response = await axios.get(`${endPoint_githubUsers}${name}/repos`);
            const data = response.data;

            const filteredData = data.filter(item => 
                item.description &&
                item.description.toLowerCase().includes(repo_filter) &&
                !item.private
            );
            // https://api.github.com/repos/camiloavil/prettycash/languages
            // https://api.github.com/users/camiloavil/repos
            const mappedData = filteredData.map((item) => {
                const links = [{
                    name: "Github Repository",
                    url: item.html_url,
                }];
                if (item.homepage){
                    links.push({
                        name: "Website",
                        url: item.homepage,
                    })
                }
                return{
                    id: item.id,
                    name: item.name.replaceAll('-' , ' ').replaceAll('_' , ' ').toUpperCase(),
                    description: item.description.charAt(0).toUpperCase() + item.description.slice(1),
                    languages_url: item.languages_url,
                    created_at: item.created_at,
                    updated_at: item.updated_at,
                    links: links,
                    language: item.language,
                    license: item.license,
                    topics: item.topics,
                    url_icon: `${endPoint_rawGithub}${item.owner.login}/${item.name}/main/icon.svg`,
                    showType: 'normal',
                }
            });
            console.log(mappedData);
            return mappedData;
        } catch (err) {
            console.error(err);
            console.log(err.response);
            return null;
        }
    },
    async getExamplePic(filePicUser, colorCenter, colorOuter, colorBorder) {
        let blobPic;
        let border_url='';
        const url_endPoint = `${endPoint_examplePic}medium?index=1&colorCenter=${colorCenter.replace('#','%23')}&colorOuter=${colorOuter.replace('#','%23')}`;
        console.log(url_endPoint);
        if (colorBorder){
            border_url= `&colorBorder=${colorBorder.replace('#','%23')}`;
        }
        console.log(url_endPoint + border_url);
        const picForm = new FormData();
        picForm.append('headers',{
            'Accept': '*/*',
            'Content-Type': 'multipart/form-data',
        })
        picForm.append('picture_file',filePicUser)
        await axios.post(
            url_endPoint + border_url,
            picForm,
            {onUploadProgress: (progressEvent) => {
                console.log('progress Upload :'+ Math.round((progressEvent.loaded / progressEvent.total)*100) + '%')
            },
            onDownloadProgress: (progressEvent) => {
                console.log('progress Download :'+ Math.round((progressEvent.loaded / progressEvent.total)*100) + '%')
            },
            responseType: 'blob'
          })
          .then(res => { blobPic = res.data })
          .catch(err => {
              console.error(err)
              console.log(err.response)
              return null
          })
        return blobPic;   
    },
    test_axios() {
        let url = 'https://picsum.photos/200'
        axios(url,{responseType: 'blob'})
        .then(res => {
            console.log(res.data);
            // bi = new Blob([res], {type: 'image/jpeg'});
        })
        // .then(blob => {
        //     console.log(blob)
        // })
    },
    async test_fetch() {
        let url = 'https://picsum.photos/200'
        fetch(url)
        .then(res => res.blob())
        .then(blob => {
            console.log(blob)
            return blob
        })
    }
}