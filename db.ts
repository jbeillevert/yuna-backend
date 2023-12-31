require('dotenv').config()
import { createClient } from '@supabase/supabase-js';

// Utilisez les informations de votre projet Supabase

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY


// Créez un client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
