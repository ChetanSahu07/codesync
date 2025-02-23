import { ID , Client , Databases} from 'appwrite'
import config from '../config/config'

export class DatabaseService{

    client = new Client() ;
    databases ;


    constructor(){
        this.client
        .setEndpoint(config.appwriteurl)
        .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client) ;

    }


    async createPost( slug , { leetcode , codeforces , codechef , gfg }){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId ,
                config.appwriteCollectionId ,
                slug ,
                {
                    leetcode ,
                    codeforces ,
                    codechef ,
                    gfg
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId ,
                config.appwriteCollectionId ,
                slug
            )
        } catch (error) {
            console.log(error) ;
            return false ;
        }
    }

    async updatePost( slug , { leetcode , codeforces , codechef , gfg }){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId ,
                config.appwriteCollectionId ,
                slug ,
                {
                    leetcode,
                    codeforces ,
                    codechef ,
                    gfg
                }
            )
        } catch (error) {
            console.log(error)
        }
    }
}

const databaseService = new DatabaseService() 

export default databaseService ;
