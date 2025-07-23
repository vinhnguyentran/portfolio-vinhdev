export const Footer = () => {
    const mapEmbedUrl ='//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44082.417633065554!2d108.03116428483294!3d16.104171402298828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421f94b738b5f7%3A0xf8d5705747c357a3!2zSG_DoCBMacOqbiwgSMOyYSBWYW5nLCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1753266891001!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <div className="flex justify-center p-8">
      <div className="text-xl text-primary font-bold flex flex-col items-center">
        <span className="relative z-10">
          <span className="text-neon text-foreground">K-vinDev </span>
          Portfolio
        </span>
         <span>@K-VinDev {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};
