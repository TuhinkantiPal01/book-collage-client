import { useContext } from "react";
import Banner from "../../../Components/Banner/Banner";
import useAdmission from "../../../Components/Hooks/userAdmission";
import { AuthContext } from "../../../Components/provider/AuthProvider";
import { IconButton } from "@mui/material";
import { BiSolidTrashAlt } from "react-icons/bi";
import Loading from "../../../Components/Loading/Loading";
import Swal from "sweetalert2";

const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [data, isLoading, refetch] = useAdmission(user?.email);


  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want Remove this College From Here",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://book-collage-server.vercel.app/admission/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <section>
      <Banner title='My College' subtitle='Your Selected Colleges' height='96' />

      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className='my-20'>
            {data.length > 0 ? (
              <>
                <div>
                  <div className='container mx-auto px-4 py-8'>
                    <h1 className='text-3xl text-center font-semibold mb-4'>Your Selected Colleges</h1>
                    <div className='shadow-lg rounded-lg overflow-scroll md:overflow-hidden'>
                      <table className='w-full'>
                        <thead className='bg-gray-200'>
                          <tr>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Name</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Email</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>College</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Subject</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Date</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Action</th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                          {data.map(({ name, email, collage, subject, date, _id }, index) => (
                            <tr key={index}>
                              <td className='px-6 py-4 whitespace-nowrap'>{name}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{email}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{collage}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{subject}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{date}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>
                                <IconButton onClick={() => handleDelete(_id)} aria-label='delete'>
                                  <BiSolidTrashAlt />
                                </IconButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='max-w-5xl mx-auto min-h-[300px] flex justify-center items-center'>
                  <h3>You Have No Selected collage</h3>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default MyCollege;
