import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cevjtkqkqcvzyqtpjoqe.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNldmp0a3FrcWN2enlxdHBqb3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNzU5NTUsImV4cCI6MjA5Mjc1MTk1NX0.ZFPcSrQRa5BfoRyF4WOwtFpxpZrE1c9ipnHdvl9HVcU' 

export const supabase = createClient(supabaseUrl, supabaseKey)