import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';
import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

type AuthData = {
	session: Session | null;
	users: any;
	loading: boolean;
};

const AuthContext = createContext<AuthData>({
	session: null,
	loading: true,
	users: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
	const [session, setSession] = useState<Session | null>(null);
	const [users, setUsers] = useState<
		{ id: string; username: string; test: string }[]
	>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSession = async () => {
			console.log('Jestesmy tu');
			const {
				data: { session },
			} = await supabase.auth.getSession();

			setSession(session);

			console.log('Sesja została ustawiona');
			// if (session) {
			// 	// fetch profile
			// 	const { data, error } = await supabase
			// 		.from('profiles')
			// 		.select('*')
			// 		.eq('id', session.user.id);
			// 	if (error) console.log(error.message);
			// 	setUsers(data ?? []);
			// }

			setLoading(false);
		};

		fetchSession();
		supabase.auth.onAuthStateChange(async (_event, session) => {
			setSession(session);
			if (session) {
				// fetch profile
				const { data, error } = await supabase
					.from('profiles')
					.select('*')
					.eq('id', session.user.id);
				if (error) console.log(error.message);
				setUsers(data ?? []);
			}

			console.log('Changed auth');
		});
	}, []);

	return (
		<AuthContext.Provider value={{ session, loading, users }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
