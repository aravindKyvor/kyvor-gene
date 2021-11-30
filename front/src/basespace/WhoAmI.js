import React,{ useEffect,useState } from 'react'

import axios from 'axios'

const WhoAmI = () => {
 
    const[result, setResult]=useState({
        users:null
    })

        
    useEffect(() => {
        axios.get('https://api.basespace.illumina.com/v1pre3/users/29912883',
        {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                'Authorization': `bearer 06b0992449f34d2dad91bf12d0bd5b15`,
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
			const allPosts = res.data;
			setResult({ posts: allPosts });
			console.log(res.data);
		});
	}, [setResult]);
    return (
        <div>
             {result.posts && result.posts.map((item)=>{
                 return(
                 <div >
                     <h2>{item.Email}</h2>

                 </div>
                 )
             })}
            
        </div>
    )
}

export default WhoAmI
