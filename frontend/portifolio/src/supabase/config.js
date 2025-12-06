// src/services/supabase/config.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xfccjczcxheadxebtucl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmY2NqY3pjeGhlYWR4ZWJ0dWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NTE4NTYsImV4cCI6MjA4MDUyNzg1Nn0.WDP3MYa67Vn-MCSlexjizlsllx-kWYrB4U3n6draflE'

export const supabase = createClient(supabaseUrl, supabaseKey)