import React , {useState} from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { updateData } from '../slices/userSlice'
import {Input} from './index'

function UserForm() {

    const { handleSubmit, register } = useForm() ;
    const navigate = useNavigate();
    const dispatch = useDispatch() ;
   
    const submit = (data)=>{
        dispatch(updateData(data))
        navigate(`/user/${data.leetcode}`)
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)} className="flex bg-cover flex-wrap flex-col justify-center gap-5 items-center pt-12 bg-[url('/img2.jpg')] pb-15 " 
            >
                <Input
                    label='codechef'
                    placeholder='Enter codechef username'
                    type='text'
                    {...register("codechef", { required: true })}
                />
                <Input
                    label='leetcode'
                    placeholder='Enter Leetcode username'
                    type='text'
                    {...register("leetcode", { required: true })}
                />
                <Input
                    label='geeksforgeeks'
                    placeholder="Enter GFG username"
                    type='text'
                    {...register("gfg", { required: true })}
                />
                <Input
                    label='codeforces'
                    placeholder="Enter codeforces username"
                    type='text'
                    {...register("codeforces", { required: true })}
                />
                <button type="submit" className='text-white bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-200 hover:text-black font-bold duration-150'>
                    Generate Profile
                </button>
            </form>

        </div>
    )
}

export default UserForm