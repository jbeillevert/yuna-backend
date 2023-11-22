const dotenv = require('dotenv')
require('dotenv').config()
const Knex = require('knex')
import { createClient } from '@supabase/supabase-js';

// Utilisez les informations de votre projet Supabase

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

console.log("ici je log supabase url : ", supabaseUrl);
console.log("ici je log supabase key : ", supabaseKey);


// Créez un client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
