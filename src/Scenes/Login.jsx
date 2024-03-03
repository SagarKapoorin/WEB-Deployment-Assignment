import Logo from '../assets/Group1.png'
import { useNavigate } from 'react-router-dom';
import UserImage from '../components/Image';
import { Formik } from "formik";
import * as yup from "yup";
import { Typography,Box,TextField,Button } from '@mui/material';

function LoginPage(){
    const navigate = useNavigate();
    const showAlert = () => {
        window.alert('Email is not Correct Please Check');
    };

    const handleFormSubmit = (values,onSubmitProps) => {
       if(values.email=="s@gmail.com" && values.password=="123456"){
            navigate("/user");
       }else{
        window.alert("Wrong Password");
       }

    }

    const loginSchema = yup.object().shape({
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
      });

      const initialValuesLogin = {
        email: "",
        password: "",
      };

    return(
        <div className="login_page">
            <Box display="flex" alignItems="center" justifyContent="center" mb="20px">
            <Box m='0 auto'>
            <UserImage image={Logo} size='120px'/>
            </Box>
            </Box>
            <Typography  color='#36A546CC' textAlign={'center'} mb="20px">
            #We are Electric
            </Typography>
            <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesLogin}
          validationSchema={loginSchema}
        >
        {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            
          >
            
        <TextField
             label='Email'
             error={Boolean(touched.email) && Boolean(errors.email)}
             value={values.email}
             name="email"
             onBlur={handleBlur}
            onChange={handleChange}
             InputLabelProps={{
                sx: {
                    color: '#FFFFFF8C', 
                },
            }}
            InputProps={{
                style: { color: '#FFFFFF8C' },
              }}
              sx={{ gridColumn: "span 4" , background: "#1F191966 0% 0% no-repeat padding-box",
              boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
              borderRadius:"20px",
              mixBlendMode: "normal",
              width:"280px",
              opacity: "1",
              m:"0 auto",
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFFFF', 
                  borderRadius:"20px"
                },
              },
              
            }}
            />
            <TextField
               label='Password'
               value={values.password}
               name="password"
               onBlur={handleBlur}
                  onChange={handleChange}
               InputLabelProps={{
                  sx: {
                      color: '#FFFFFF8C', 
                      
                  },
              }}
              InputProps={{
                style: { color: '#FFFFFF8C' },
              }}
              sx={{ gridColumn: "span 4" , background: "#1F191966 0% 0% no-repeat padding-box",
              boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
              mixBlendMode: "normal",
              m:"0 auto",
              borderRadius:"20px",
              width:"280px",
              opacity: "1",
              color: "#FFFFFF8C",
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFFFF', 
                  borderRadius:"20px",
                },
              }, }}
            />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                color:"#FFFFFF8C",
                background: "transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box",
                mixBlendMode: "normal",
                border: "2px solid #8CFF0026",
                opacity: "1",
                width:"238px",
                height:"46px",
                borderRadius:"20px",
              }}
            >
              { "LOGIN"}
            </Button>
           
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
          <Typography color={"#36A546"} fontSize={"15px"}>Forget Your Password?</Typography>
          </Box>
        </form>
      )}
      
    </Formik>
        </div>
    )
}
export default LoginPage;