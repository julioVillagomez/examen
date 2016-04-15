<?php

	$listado= [];

	for ($i = 1; $i <= 500; $i++) {
    	$color='blanco';
    	if($i % 5 ==0) $color="naranja";
    	if($i % 3 ==0) $color="azul";
    	if($i % 3 ==0 && $i % 5==0) $color="gris";


    	$listado[]=["color"=>$color,"numero"=>$i];
    };

    echo json_encode($listado);
	



?>