// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://argdkihlzwebbtivmgxn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZ2RraWhsendlYmJ0aXZtZ3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTkxMjMsImV4cCI6MjA2OTk5NTEyM30.NSs8J4zyS0uJfY0N2kACXEvKVxAYdo9PPdxgUiSivlw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);