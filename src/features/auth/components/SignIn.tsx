import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {
	createTheme,
	ThemeProvider,
	styled,
	PaletteMode,
} from '@mui/material/styles';
import TemplateFrame from './TemplateFrame';
import {IFieldFormInputSignIn} from "@/features/auth/interfaces/AuthInterface.ts";
import {useForm} from "react-hook-form";
import {signInSchema} from "@/features/auth/schemas/AuthSchema.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import useLoginMutation from "@/features/auth/hooks/useLoginMutation.tsx";
import {useAppSelector} from "@/redux/hook.ts";
import useAuthenticate from "@/hooks/useAuthenticate.tsx";

const Card = styled(MuiCard)(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'center',
	width: '100%',
	padding: theme.spacing(4),
	gap: theme.spacing(2),
	margin: 'auto',
	boxShadow:
		'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
	[theme.breakpoints.up('sm')]: {
		width: '450px',
	},
	...theme.applyStyles('dark', {
		boxShadow:
			'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
	}),
}));

const SignUpContainer = styled(Stack)(({theme}) => ({
	minHeight: '100%',
	padding: theme.spacing(2),
	[theme.breakpoints.up('sm')]: {
		padding: theme.spacing(4),
	},
	backgroundImage:
		'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
	backgroundRepeat: 'no-repeat',
	...theme.applyStyles('dark', {
		backgroundImage:
			'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
	}),
}));

export default function SignUp() {
	const [mode, setMode] = React.useState<PaletteMode>('light');
	const [showCustomTheme, setShowCustomTheme] = React.useState(true);
	const defaultTheme = createTheme({palette: {mode}});
	const mutation = useLoginMutation();
	const { isLoading  } = useAuthenticate();
	const {user, isAuthenticated} = useAppSelector(state => state.user);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm<IFieldFormInputSignIn>({
		resolver: yupResolver(signInSchema)
	})

	// This code only runs on the client side, to determine the system color preference
	React.useEffect(() => {
		// Check if there is a preferred mode in localStorage
		const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
		if (savedMode) {
			setMode(savedMode);
		} else {
			// If no preference is found, it uses system preference
			const systemPrefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;
			setMode(systemPrefersDark ? 'dark' : 'light');
		}

		console.log("User: ", user);
		console.log("Is Authenticated: ", isAuthenticated);
	}, []);

	React.useEffect(() => {
		if (isAuthenticated && !isLoading) {
			if (user.role === 'ADMIN') navigate('/admin');
			if (user.role === 'USER') navigate('/products');
		}
	}, [isAuthenticated, user, navigate, isLoading]);

	const toggleColorMode = () => {
		const newMode = mode === 'dark' ? 'light' : 'dark';
		setMode(newMode);
		localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
	};

	const toggleCustomTheme = () => {
		setShowCustomTheme((prev) => !prev);
	};

	const onSubmit = (data: IFieldFormInputSignIn) => {
		console.log(data);

		mutation.mutate(data)
	}

	console.log("Error list: ", errors);

	return (
		<TemplateFrame
			toggleCustomTheme={toggleCustomTheme}
			showCustomTheme={showCustomTheme}
			mode={mode}
			toggleColorMode={toggleColorMode}
		>
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline enableColorScheme/>
				<SignUpContainer direction="column" justifyContent="space-between">
					<Card variant="outlined">
						<Typography
							component="h1"
							variant="h4"
							sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
						>
							Sign In
						</Typography>
						<Box
							component="form"
							onSubmit={handleSubmit(onSubmit)}
							sx={{display: 'flex', flexDirection: 'column', gap: 2}}
						>
							<FormControl>
								<FormLabel htmlFor="email">Email</FormLabel>
								<TextField
									fullWidth
									id="email"
									placeholder="your@email.com"
									autoComplete="email"
									variant="outlined"
									error={Boolean(errors.email?.message)}
									helperText={errors.email?.message}
									{...register('email')}
								/>
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="password">Password</FormLabel>
								<TextField
									fullWidth
									placeholder="••••••"
									type="password"
									id="password"
									autoComplete="new-password"
									variant="outlined"
									error={Boolean(errors.password?.message)}
									helperText={errors.password?.message}
									{ ...register('password') }
								/>
							</FormControl>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary"/>}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
							>
								Sign In
							</Button>
							<Typography sx={{textAlign: 'center'}}>
								You don't have an account?{' '}
								<span>
                  <Link to={'/sign-up'} style={{textDecoration: "none"}}> Sign Up </Link>
                </span>
							</Typography>
						</Box>
						<Divider>
							<Typography sx={{color: 'text.secondary'}}>or</Typography>
						</Divider>
					</Card>
				</SignUpContainer>
			</ThemeProvider>
		</TemplateFrame>
	);
}