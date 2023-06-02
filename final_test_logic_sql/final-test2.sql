-- Tampilkan data polis yang disubmit setelah tanggal 15 JANUARI 2018 berdasarkan client yang lahir di bulan SEPTEMBER
SELECT * FROM t_policy p
JOIN t_agent a ON a.agent_code = p.agent_code
JOIN t_client c ON c.client_number = p.client_number
WHERE policy_submit_date > '2018-01-15' AND DATE_PART('month', birth_date) = 9;


-- Tampilkan data polis dengan status INFORCE, yang agentnya berkantor di "JAKARTA"
SELECT  p.*, a.agent_name, a.agent_office FROM t_policy p
JOIN t_agent a ON a.agent_code = p.agent_code
WHERE policy_status = 'INFORCE' AND agent_office = 'JAKARTA';


-- Hitunglah Kolom Basic Commission pada Table T_AGENT
CREATE OR REPLACE PROCEDURE CalculateBasicCommission()
LANGUAGE plpgsql AS $$
DECLARE rec_policy record;
BEGIN
  FOR rec_policy IN SELECT SUM((commission/premium) * 100)::numeric AS total_basic_commission, agent_code FROM t_policy GROUP BY agent_code
  LOOP
    UPDATE t_agent SET basic_commission = rec_policy.total_basic_commission WHERE agent_code = rec_policy.agent_code;
  END LOOP;
END; $$

CALL CalculateBasicCommission();

-- Isilah kolom POLICY_DUE_DATE dari table T_POLICY, dengan kondisi tanggal akhir bulan dari 30 Hari setelah tanggal POLICY_SUBMIT_DATE
CREATE OR REPLACE PROCEDURE UpdatePolicyDueDate()
LANGUAGE plpgsql AS $$
DECLARE rec_policy record;
BEGIN
  FOR rec_policy IN SELECT policy_number, policy_submit_date FROM t_policy
  LOOP
    UPDATE t_policy SET policy_due_date = (date_trunc('month', (rec_policy.policy_submit_date + 30)) + interval '1 month - 1 day') WHERE policy_number = rec_policy.policy_number;
  END LOOP;
END; $$

CALL UpdatePolicyDueDate();

-- Tampilkan semua data produksi agent yang nilai premiumnya setelah dipotong DISCOUNT dibawah SATU JUTA (diurutkan dari nilai terkecil)
SELECT *, (premium - (premium * discount/100)) as premium_after_discount FROM t_policy
WHERE premium::numeric - (premium * discount/100)::numeric < 1000000
ORDER BY (premium - (premium * discount/100));