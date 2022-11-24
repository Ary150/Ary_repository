
  <?php
try
{
	// On se connecte à MySQL
	$mysqlClient = new PDO('mysql:host=localhost;dbname=school;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

// Si tout va bien, on peut continuer

// On récupère tout les nom de la table étudiant
$sqlQuery = 'SELECT nom,prenom FROM etudiant';
$recipesStatement = $mysqlClient->prepare($sqlQuery);
$recipesStatement->execute();
$name = $recipesStatement->fetchAll();

$sqlQuery = 'SELECT * FROM etudiant';
$recipesStatement = $mysqlClient->prepare($sqlQuery);
$recipesStatement->execute();
$idEtuiant = $recipesStatement->fetchAll();

$sqlQuery = 'SELECT convention.nom FROM convention inner join etudiant on etudiant.id_convention = convention.id where etudiant.id_convention = convention.id';
$recipesS = $mysqlClient->prepare($sqlQuery);
$recipesS->execute();
$nameConvention = $recipesS->fetchAll();

?>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
	<title>Test Softia</title>
  </head>
  <body>
<div>
<?php
        					foreach ($nameConvention as $nm) {
								?>
										<p><?php echo 'Test affichage ', $nm[0]; ?></p>
								<?php
								}
							?>

</div>



<form action="reponse.php" method="post">

    <div class="mb-3">
				<select class="form-select" name="name_student" aria-label="Default select example">
				<option >Selectionner l'étudiant</option>
				<?php
								foreach ($name as $nm) {
								?>
									<option value="<?php echo $nm[0] ?>" class="list-group-item">
										<?php echo $nm[0]; ?>
								</otpion>
								<?php
								}
							?>
				</select>
		</div>
		<div class="mb-3 text-area">
				<label for="FormControlTextarea1" class="form-label">Message</label>
				<textarea name="message" class="form-control"  rows="5">					
		Vous avez suivi #nbHeur# de formation chez FormationPlus.
		Pouvez-vous nous retourner ce mail avec la pièce jointe signée.
		Cordialement,
		FormationPlus
				</textarea>
		</div>
    <input type="submit" name="envoi">
    </form>

    <?php
    if(isset($_POST['envoi'])){ // si formulaire soumis

    $messageBdd = $_POST['message'];
 
    echo 'Bonjour', ' ',$_POST['name_student'];
    echo $messageBdd;

    
  

    $mysqlClient->query("INSERT INTO `attestion` VALUES (1,2,1,'$messageBdd')");

    }
    ?>

</body>
</html>