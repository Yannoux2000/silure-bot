import 'dotenv/config';

export const validateEnv = () => {
  if(!process.env.TOKEN) {
    console.warn('Token du bot discord manquant !');
    return false;
  }

  if(!process.env.GUILD_ID) {
    console.warn('l\'identifiant du serveur (GUILD_ID) n es pas défini !');
    return false;
  }

  return true;
}
