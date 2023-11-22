"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
require('dotenv').config();
const Knex = require('knex');
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
console.log("ici je log supabase url : ", supabaseUrl);
console.log("ici je log supabase key : ", supabaseKey);
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = supabase;
//# sourceMappingURL=db.js.map