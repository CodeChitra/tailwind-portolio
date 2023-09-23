import { createClient } from "contentful";
import { useEffect, useState } from "react";
const client = createClient({
    space: "jnpq8kixln6j",
    environment: "master",
    accessToken: import.meta.env.VITE_API_KEY
})

const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {

        try {
            const response = await client.getEntries({
                content_type: "portfolio"
            })

            console.log(response);
            setIsLoading(false);
            const data = response.items.map(item => {
                const { title, description, demo, github, image } = item.fields;
                const { url } = image.fields.file;
                const id = item.sys.id;
                debugger;
                const tags = item.metadata.tags.map(tag => tag.sys.id);
                console.log("Tags: ", tags);
                return { id, title, description, demo, github, url, tags };
            })
            setProjects(data);
        } catch (error) {
            setIsLoading(false);
        }

    }
    // 
    useEffect(() => {
        getData();
    }, [])

    return { isLoading, projects }
}

export default useFetchProjects;