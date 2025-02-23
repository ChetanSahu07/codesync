const config = {
    appwriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTIONID)
}

export default config