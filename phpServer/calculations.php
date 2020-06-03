<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 <?php
    echo "<html><body><table>\n\n";
    $file = fopen("calculations.csv", "r");
    while (($line = fgetcsv($file)) !== false) {
            echo "<tr>";
            foreach ($line as $cell) {
                    echo "<td>" . htmlspecialchars($cell) . "</td>";
            }
            echo "</tr>\n";
    }
    fclose($file);
    echo "\n</table></body></html>";
    ?>
 </body>
</html>