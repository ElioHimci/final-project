import { Button, Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { firebasedb } from "../../services/firebase/db";

export default function Login({open,onClose}) {
    const[joinUs,setJoinUs]= useState(false)
    const [form ,setForm] = useState({
        firstname: '',
        lastname : '',
        email : '',
        password: ''
    })

    const handleJoinUsSubmit = async (event) => {
        event.preventDefault();

        try{
            await firebasedb.register({...form})
        } catch (error){
            console.log(error);
        }
    }
    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try{
            await firebasedb.login({...form})
        } catch (error){
            console.log(error);
        }

    }
    const handleFormFieldUpdate = (value,field) =>{
        setForm ({...form,[field] : value})
    }
    return(
        <Dialog open={open}>
            <DialogTitle>
            <Box
                display= {'flex'}
                alignItems ='space-beetween'
                justifyContent = 'center'
                >
                Login
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            </DialogTitle>
            <DialogContent>
                {
                    joinUs ? 
                    <Box display={'flex'} flexDirection='column'
                    sx={{width: '100%'}}>
                        <form onSubmit={handleJoinUsSubmit}>

                        <TextField
                        label={'First Name'}
                        variant = 'standard'
                        sx={{mb:2}}
                        fullWidth
                        value={form.firstname}
                        onChange={(event) => handleFormFieldUpdate(event.target.value , 'firstname')}
                        />
                           <TextField
                        label={'Last Name'}
                        variant = 'standard'
                        sx={{mb:2}}
                        fullWidth
                        value={form.lastname}
                        onChange={(event) => handleFormFieldUpdate(event.target.value , 'lastname')}

                        />
                           <TextField
                        label={'Email'}
                        variant = 'standard'
                        sx={{mb:2}}
                        fullWidth
                        value={form.email}
                        onChange={(event) => handleFormFieldUpdate(event.target.value , 'email')}

                        />
                           <TextField
                        label={'Password'}
                        type="password"
                        variant = 'standard'
                        sx={{mb:2}}
                        fullWidth
                        value={form.password}
                        onChange={(event) => handleFormFieldUpdate(event.target.value , 'password')}

                        />
                        <Button fullWidth type = 'submit' variant="contained"> 
                        Sign up
                        </Button>
                        </form>
                        <Box sx={{mt:2 , textAlign:'center'}}>
                            <Typography variant="caption">
                                Already have an account ? {""}
                                <Button onClick={() => setJoinUs(false)}>Log in</Button>
                            </Typography>
                        </Box>
                    </Box> : (
                        <Box display={'flex'} flexDirection='column'
                        sx={{width: '100%'}}>
                            <form onSubmit={handleLoginSubmit}>

                            
                               <TextField
                            label={'Email'}
                            variant = 'standard'
                            sx={{mb:2}}
                            fullWidth
                            value={form.email}
                            onChange={(event) => handleFormFieldUpdate(event.target.value , 'email')}
            
                            />
                               <TextField
                            label={'Password'}
                            type="password"
                            variant = 'standard'
                            sx={{mb:2}}
                            fullWidth
                            value={form.password}
                            onChange={(event) => handleFormFieldUpdate(event.target.value , 'password')}

                            />
                            <Button fullWidth type = 'submit' variant="contained"> 
                            Log in
                            </Button>
                            </form>
                            <Box sx={{mt:2 , textAlign:'center'}}>
                                <Typography variant="caption">
                                    
                                    Don't have an account ? {""}
                                    <Button onClick={() => setJoinUs(true)}>
                                        Sign up
                                    </Button>
                                </Typography>
                            </Box>
                        </Box>
                    )
                }
           
            </DialogContent>
        </Dialog>
    )
}