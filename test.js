<script>
    var x=5,y=7,z=10;
    var nom="Yameni", prenom="Gabin" ,espace="";
        concatenatename= nom+espace+prenom;
    alert("Mon nom est :" +concatenatename);
    alert("\n Lavariable x est du type "+typeof(x));
    do {
        alert("Je m'appelle Yameni");
        x++;
    } while (x<11);
    alert("Voici comment on déclare un objet");
    var moi={
            nom:"Yameni",
            prenom:"Gabin";
            age:25;
        fonction: function (){
            return "Mon nom est" +nom+
                   "Mon prénom est" +prenom+
                   "Mon age est" +age;
        }
        alert(moi.fonction());
    }
</script>