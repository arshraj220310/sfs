/**
 * SFS School – Firebase Realtime Database Config
 * 
 * SETUP (one-time, takes 2 minutes, completely FREE):
 * 1. Go to https://console.firebase.google.com
 * 2. Click "Add Project" → name it "sfs-school" → Create
 * 3. Click "Realtime Database" in left menu → "Create Database"
 * 4. Choose any location → Start in TEST MODE → Enable
 * 5. Copy your database URL (looks like: https://sfs-school-xxxxx-default-rtdb.firebaseio.com)
 * 6. Replace the DB_URL below with your URL
 */

const DB_URL = 'https://sfs-school-b2dc7-default-rtdb.asia-southeast1.firebasedatabase.app';

// Firebase REST helpers (no SDK needed)
async function fbGet(path) {
  try {
    const r = await fetch(`${DB_URL}/${path}.json`);
    if (!r.ok) throw new Error('Network error');
    return await r.json();
  } catch (e) { console.error('fbGet error', e); return null; }
}

async function fbSet(path, data) {
  try {
    await fetch(`${DB_URL}/${path}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (e) { console.error('fbSet error', e); }
}

async function fbPush(path, data) {
  try {
    const r = await fetch(`${DB_URL}/${path}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await r.json();
  } catch (e) { console.error('fbPush error', e); return null; }
}

async function fbDelete(path) {
  try {
    await fetch(`${DB_URL}/${path}.json`, { method: 'DELETE' });
  } catch (e) { console.error('fbDelete error', e); }
}

// Student master data
const STUDENTS = {
  arsh: { id: 'arsh', name: 'Arsh Raj', roll: '13', admNo: '12345', cls: 'Class X \u2013 A' },
  samyak: { id: 'samyak', name: 'Samyak Mishra', roll: '23', admNo: '5678', cls: 'Class X \u2013 A' },
  tejas: { id: 'tejas', name: 'Tejas Vinayak', roll: '43', admNo: '8765', cls: 'Class X \u2013 A' }
};
