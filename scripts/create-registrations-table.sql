-- Create the registrations table in Supabase
CREATE TABLE registrations (
  id BIGSERIAL PRIMARY KEY,
  team_name VARCHAR(255) NOT NULL,
  team_size INTEGER NOT NULL CHECK (team_size >= 2 AND team_size <= 4),
  city VARCHAR(100) NOT NULL,
  project_idea TEXT NOT NULL,
  tech_stack TEXT NOT NULL,
  
  -- Member 1 (Required)
  member_1_name VARCHAR(255) NOT NULL,
  member_1_email VARCHAR(255) NOT NULL,
  member_1_phone VARCHAR(50) NOT NULL,
  member_1_institution VARCHAR(255) NOT NULL,
  
  -- Member 2 (Optional)
  member_2_name VARCHAR(255),
  member_2_email VARCHAR(255),
  member_2_phone VARCHAR(50),
  member_2_institution VARCHAR(255),
  
  -- Member 3 (Optional)
  member_3_name VARCHAR(255),
  member_3_email VARCHAR(255),
  member_3_phone VARCHAR(50),
  member_3_institution VARCHAR(255),
  
  -- Member 4 (Optional)
  member_4_name VARCHAR(255),
  member_4_email VARCHAR(255),
  member_4_phone VARCHAR(50),
  member_4_institution VARCHAR(255),
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_registrations_created_at ON registrations(created_at);
CREATE INDEX idx_registrations_city ON registrations(city);
CREATE INDEX idx_registrations_team_name ON registrations(team_name);

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_registrations_updated_at 
    BEFORE UPDATE ON registrations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Add Row Level Security (RLS) policies
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow public to insert (for registration)
CREATE POLICY "Allow public to insert registrations" ON registrations
    FOR INSERT TO anon
    WITH CHECK (true);

-- Allow service role to read all (for admin dashboard)
CREATE POLICY "Allow service role to read all registrations" ON registrations
    FOR SELECT TO service_role
    USING (true);

-- Allow service role to update and delete (for admin operations)
CREATE POLICY "Allow service role to update registrations" ON registrations
    FOR UPDATE TO service_role
    USING (true);

CREATE POLICY "Allow service role to delete registrations" ON registrations
    FOR DELETE TO service_role
    USING (true);
