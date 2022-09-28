import * as React from 'react';
import ReactDOM from 'react-dom/client';
import "@/index.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Material
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from '@Views/App/App';
import { TestApiServiceInstance } from './services/TestApiService/TestApiService';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme({});

root.render(
	// <React.StrictMode>
	//  	<BrowserRouter>
	//  			Route path="/" element={<App />} />
	//  		<Routes>/* </Routes>
	//  	</BrowserRouter>
	//  </React.StrictMode> }

	<ThemeProvider theme={theme}>

		<CssBaseline />
		<AppBar position="relative">
			<Toolbar>
				<Typography id="test-result" variant="h6" color="inherit" noWrap>
					Non test result
				</Typography>
			</Toolbar>
		</AppBar>
		<main>
			{/* Hero unit */}
			<Box
				sx={{
					bgcolor: 'background.paper',
					pt: 8,
					pb: 6,
				}}
			>

				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						Dartin Molema
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
						The website to track your dart matches!
					</Typography>
					<Stack
						sx={{}}
						direction="row"
						spacing={2}
						justifyContent="center"
						alignItems="center"					>
						<Button sx={{ minWidth: 250 }} variant="outlined">Player Overview</Button>
						<Button sx={{ minWidth: 250 }} variant="outlined">Tournament Overview</Button>
						<Button sx={{ minWidth: 250 }} variant="outlined">New Match</Button>
						<Button sx={{ minWidth: 250 }} variant="outlined">Import Match</Button>
					</Stack>
				</Container>
			</Box>
		</main>
		{/* Footer */}
		< Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" >
			<Typography variant="h6" align="center" gutterBottom>
				Footer
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				color="text.secondary"
				component="p"
			>
				Something here to give the footer a purpose!
			</Typography>
		</Box >
		{/* End footer */}
	</ThemeProvider >
);

TestApiServiceInstance.echo("Dartin Testema").then((message: string) => { document.getElementById("test-result")!.innerText = message; });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
