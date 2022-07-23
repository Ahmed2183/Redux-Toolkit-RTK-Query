import "./App.css";
import { useGetAllPostQuery, useGetPostByIdQuery, useGetLimitPostByNumQuery, 
useDeletePostMutation,useCreatePostMutation,useUpdatePostMutation} from "./services/post";
import {useState} from 'react';

function App() {

 const [value, setValue] = useState(10);

  // const response = useGetAllPostQuery();
  const responsebyid = useGetPostByIdQuery(value); //Get id number 10
  // const responselimit = useGetLimitPostByNumQuery(4); 
  // const [deletePost,responsedelete] = useDeletePostMutation();
  // const [createPost,responsecreate] = useCreatePostMutation();
  // const newPost = {
  //   title: "This is new Data API",
  //   body: "Create a new Data API",
  //   userId: 1,
  // }
  // console.log("New Data", responsecreate);

  // const [updatePost,responseupdate] = useUpdatePostMutation();
  // const updatePostData = {
  //   id:1,
  //   title: "This is new Update Data API",
  //   body: "Create a new Update Data API",
  //   userId: 1,
  // }
  // console.log("Update Data", responseupdate);

  // console.log("Response", response);
  // console.log("Data", response.data);
  // console.log("Success", response.isSuccess);

  // if (response.isLoading) {
  //   return <div>Please Wait....</div>;
  // }
  // if (response.isError) {
  //   return <h1>Error Occurred {response.error.error}</h1>;
  // }

  return (
    // Get All Data
    //   <div className="App">
    //  <h1>All Data</h1>
    //  {
    //    response.data?.map((post,i) => // ? means if null in data then map not called
    //      <div key={i}>
    //        <h2>{post.id} {post.title}</h2>
    //        <p>{post.body}</p>
    //        <hr/>
    //      </div>
    //    )
    //  }
    //   </div>

    //Get Single Data By ID
    <div className="App">
      <h1>Data By ID</h1>
      <input value={value} onChange={(e)=>setValue(e.currentTarget.value)}></input>
      <h1>{value}</h1>
      <h2>{responsebyid.data?.id} {responsebyid.data?.title}</h2>
      <p>{responsebyid.data?.body}</p>
    </div>

  //   //Get Limit Data
  //  <div className="App">
  //  <h1>Limit Data</h1>
  //    {
  //      responselimit.data?.map((post,i) => 
  //        <div key={i}>
  //          <h2>{post.id} {post.title}</h2>
  //          <p>{post.body}</p>
  //          <hr/>
  //        </div>
  //      )
  //   }
  // </div>

  //Delete Data
//   <div className="App">
//     <h1>Delete Data</h1>
// <button onClick={()=>{deletePost(5)}}>Delete Data</button>
//   </div>

//Create Data
// <div className="App">
//     <h1>Create Data</h1>
//  <button onClick={()=>{createPost(newPost)}}>Create Data</button>
//   </div> 

  //Update Data
//   <div className="App">
//   <h1>Update Data</h1>
//  <button onClick={()=>{updatePost(updatePostData)}}>Update Data</button>
//   </div>
  );
}

export default App;
