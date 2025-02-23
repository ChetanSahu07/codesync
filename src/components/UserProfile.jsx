import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import databaseService from '../services/dataService';

function UserProfile() {

    const { slug } = useParams();
    console.log(slug);
    const fullData = {
        leetcode: {
            easy: 0,
            medium: 0,
            hard: 0,
            total: 0
        },
        codeforces: {
            img: "",
            rating: 0,
            maxrating: 0,
            rank: ""
        },
        codechef: {
            img: "",
            rating: 0,
            maxrating: 0,
            stars: 0
        },
        gfg: {
            img: "",
            totalPromblems: 0
        }
    }
    const [data, setData] = useState(null)
    const [l1, setl1] = useState(true)
    const [l2, setl2] = useState(true)
    const [l3, setl3] = useState(true)
    const [l4, setl4] = useState(true)
    const leetcodeApi = `https://leetcode-stats-api.herokuapp.com/${slug}`
    const codeforcesApi = `https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan&checkHistoricHandles=false`
    const codechefApi = `https://codechef-api.vercel.app/handle/strommbreaker`
    //const gfgApi = `https://geeks-for-geeks-api.vercel.app/arnoob16`
    const [d, setD] = useState(fullData)


    useEffect(() => {
        databaseService.getPost(slug)
            .then((res) => {
                if (res) {
                    setData(res)
                    console.log(res)
                    setl1(false)
                }
            })
    }, [])

    useEffect(() => {
        if (data) {
            fetch(`https://leetcode-stats-api.herokuapp.com/${slug}`)
                .then((res) => res.json())
                .then((res) => {
                    fullData.leetcode.easy = res.easySolved;
                    fullData.leetcode.medium = res.mediumSolved;
                    fullData.leetcode.hard = res.hardSolved;
                    fullData.leetcode.total = res.totalSolved;
                    setD(fullData)
                    setl2(false)
                })
        }
    }, [data])

    useEffect(() => {
        if (data) {
            fetch(`https://codeforces.com/api/user.info?handles=${data.codeforces}&checkHistoricHandles=false`)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    fullData.codeforces.img = res.result[0].avatar;
                    fullData.codeforces.rank = res.result[0].rank;
                    fullData.codeforces.rating = res.result[0].rating;
                    fullData.codeforces.maxrating = res.result[0].maxRating;
                    setD(fullData)
                    setl3(false)
                })

        }
    }, [data])

    useEffect(() => {
        if (data) {
            fetch(`https://codechef-api.vercel.app/handle/${data.codechef}`)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    fullData.codechef.img = res.profile;
                    fullData.codechef.rating = res.currentRating;
                    fullData.codechef.stars = res.stars;
                    fullData.codechef.maxrating = res.highestRating;
                    setD(fullData)
                    setl4(false)
                })
        }
    }, [data])

    // useEffect(()=>{
    //     if(data){
    //         fetch(`https://geeks-for-geeks-api.vercel.app/${data.gfg}`)
    //         .then((res)=> res.json())
    //         .then((res)=>{
    //             console.log(res)
    //         })
    //     }
    // },[data])



    return (l1 && l2 && l3 && l4) ? (
        <div className=" text-white justify-center items-center flex flex-wrap bg-cover h-screen bg-[url('/img2.jpg')]">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            <div className='my-4 mx-2'>Loading...</div>
        </div>
    ) : (
        <div className=" text-lg gap-5 text-white justify-center items-center flex-col flex flex-wrap bg-cover h-screen bg-[url('/img2.jpg')]">
            <div className='bg-gray-600 rounded-md w-1/2 px-5 py-2 flex flex-col gap-2'>
                <div className='flex flex-wrap gap-2'>
                    <div className='font-bold'>Leetcode</div>
                    <img className='h-8 bg-white rounded-md' src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png'></img>
                </div>
                <div className='bg-green-700 px-2 rounded-md'>Easy Solved: {d.leetcode.easy} </div>
                <div className='bg-yellow-700 px-2 rounded-md'>Medium Solved: {d.leetcode.medium} </div>
                <div className='bg-red-700 px-2 rounded-md'>Hard Solved: {d.leetcode.hard} </div>
                <div className='bg-blue-800 px-2 rounded-md'>Total Solved:  {d.leetcode.total} </div>
            </div>
            <div className='bg-gray-600 rounded-md w-1/2 px-5 py-2 flex flex-col gap-2'>
                <div className='flex flex-wrap gap-2'>
                    <div className='font-bold' >CodeForces</div>
                    <img className='h-8 bg-white rounded-md' src='https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png?f=webp&w=256' ></img>
                </div>

                <div className='bg-amber-700 px-2 rounded-md' >Rating: {d.codeforces.rating} </div>
                <div className='bg-cyan-700 px-2 rounded-md'>MaxRating: {d.codeforces.maxrating} </div>
                <div className='bg-green-700 px-2 rounded-md'>Rank: {d.codeforces.rank} </div>
            </div>
            <div className='bg-gray-600 rounded-md w-1/2 px-5 py-2 flex flex-col gap-2'>
            <div className='flex flex-wrap gap-2'>
            <div className='font-bold'>CodeChef</div>
            <img className='h-8 bg-white rounded-md' src='https://img.icons8.com/fluent/512/codechef.png'></img>
            </div>
                <div className='bg-amber-700 px-2 rounded-md'>Rating: {d.codechef.rating} </div>
                <div className='bg-cyan-700 px-2 rounded-md'>MaxRating: {d.codechef.maxrating} </div>
                <div className='bg-green-700 px-2 rounded-md'>Stars: {d.codechef.stars} </div>
            </div>
        </div>
    )

}

export default UserProfile
