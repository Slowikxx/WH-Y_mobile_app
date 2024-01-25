import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rfywnfzclurjuggskxzw.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmeXduZnpjbHVyanVnZ3NreHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxMDc0NzIsImV4cCI6MjAyMTY4MzQ3Mn0.TqQPQSyUNd74Fqpq9myEImO_fw5x7xpJCAnRtNSP2NI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});
