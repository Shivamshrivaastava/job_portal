import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core/TextField';
import { Container } from '@material-ui/core/Container';
import { WithStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core/CssBaseline';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import useStyles from '../components/useStyles';


function JobForm(props) {
    const { classes } = props;

    return (
        <>

            <CssBaseline />
            <div className={classes.root}>
                <Container maxWidth="sm" className={classes.container}>
                    <Typography
                        className={classes.top}
                        style={{ textAlign: "center", marginBottom: "2px" }}

                        variant="h4"
                        >
                         THANK YOU FOR YOUR INTEREST
                    </Typography>
                    <Typography style = {{textAlign:"center"}} variant = "h6" gutterBottom>
                        WE WOULD LIKE TO LEARN MORE ABOUT YOU.
                    </Typography>
                    <Formik initialValues={initialValues} 
                    onSubmit = {(values)=>handleSubmit(values)}
                    validationSchema = {schema}
                    >
                    {({setFieldValue, serFieldTouched, values, errors, touched})=>(
                       <Form>
                        <Grid container spacing={3}>
                            <Grid item xs = {12} sm = {6}>
                                <Field
                                variant = "outlined"
                                required
                                id ="firstName"
                                name = "firstName"
                                label = "First Name"
                                fullWidth
                                helperText = {
                                    <ErrorMessage name = "firstName"></ErrorMessage>
                                }
                                error = {touched.firstName && Boolean(errors.firstName)}
                                as = {TextField}
                                />
                            </Grid>
                            <Grid item xs ={12} sm = {6}>
                                <Field
                                variant ="outlined"
                                required
                                id ="lastName"
                                name = "lastName"
                                label = "Last Name"
                                fullWidth
                                helperText = {<ErrorMessage name='lastName'></ErrorMessage>}
                                error = {touched.lastName && Boolean(errors.lastName)}
                                as = {TextField}
                                />
                        </Grid>
                        <Grid item xs ={12}>
                         <Field
                         variant = "outlined"
                         required
                         id = "fullName"
                         name = "fullName"
                         label = "Full Name"
                         value={
                            (values.fullName = `${values.firstName} ${values.lastName}`)
                          }
                          fullWidth
                           helperText = {<ErrorMessage name=' fullName'></ErrorMessage>}
                           error = {touched.fullName && Boolean(errors.fullName)}
                           as = {TextField}
                         />
                        </Grid>
                        <Grid item xs = {12}>
                            <Field
                            variant ="outlined"
                            required
                            id="email"
                            name = "email"
                            label = "Email Address"
                            fullWidth
                            helperText = {<ErrorMessage name='fullName'></ErrorMessage>}
                            error = {touched.email && Boolean(errors.email)}
                            as = {TextField}
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <Field
                            variant = "outlined"
                            required
                            id = "contactNumber"
                            name = "contactNumber"
                            label = "Contact Number"
                            fullWidth
                            helperText = {
                                <ErrorMessage name="contactNumber"></ErrorMessage>
                            }
                            error ={
                                touched.contactNumber && Boolean(errors.contactNumber)
                            }
                            as = {TextField}
                            />
                        </Grid>
                        <Grid item xs = {12} sm = {6}>
                         <Field
                         variant = "outlined"
                         select
                         label = "Designation"
                         name = "jobTitle"
                         fullWidth
                         value = {values.jobTitle}
                         helperText = {<ErrorMessage name='jobTitle'></ErrorMessage>}
                         error = {touched.jobTitle && Boolean(errors.jobTitle)}
                         as = {TextField}
                         />
                        </Grid>
                        </Grid>
                       </Form> 
                    )}
                    </Formik>
                </Container>

            </div>
        </>
    )
}
