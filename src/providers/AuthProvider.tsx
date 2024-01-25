import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert} from 'react-native'

type AuthData = {
  session: Session | null;
  profile: any;
  loading: boolean;
};

const AuthContext = createContext<AuthData>({
  session: null,
  loading: true,
  profile: null
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<{id: string, first_name: string, last_name: string, pesel: string, date_of_birth: Date, city: string, street: string, post_code: string, phone_number: string} | null>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
		setSession(session)
	  })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
	if(session) getProfile()
  }, [session])
  
  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('profiles')
		.select('*')
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }
	  setProfile(data || null);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{ session, loading, profile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
