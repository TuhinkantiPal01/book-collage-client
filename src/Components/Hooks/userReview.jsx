import { useQuery } from "@tanstack/react-query";

const useReview = () => {
    const {data = [] , isLoading , error , refetch} = useQuery({
        queryKey:["collage"],
        queryFn: async() =>{
            try{
                const response = await fetch(`https://book-collage-server.vercel.app/reviews`)
                const data  = response.json();
                return data
            }
            catch(err){
                console.log(err);
            }
        }
    })

    return [data, isLoading , error , refetch]

}

export default useReview;
