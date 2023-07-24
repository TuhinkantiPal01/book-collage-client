import { useQuery } from "@tanstack/react-query";

const useAdmission = (email) => {
    const {data = [] , isLoading , error , refetch} = useQuery({
        queryKey:["collage",email],
        queryFn: async() =>{
            try{
                const response = await fetch(`https://book-collage-server-tuhinofficial.vercel.app/admission/email?email=${email}`)
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

export default useAdmission;