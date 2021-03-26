Si possono trovare profonde similitudini negli studi di fisica statistica, matematica finita e l’informatica teorica: Il linguaggio matematico computazionale nell’approccio nei problemi di ottimizzazione è il ponte naturale tra queste scienze. 

La sfida è di trasgredire i reciproci confini di tali discipline con la speranza che il progresso di una porti beneficio alle altre. 

(È stato riconosciuto? da chi? ) le transizioni di fase giocano un ruolo importante nelle analisi probabilistiche dei problemi combinatori di ottimizzazione. 

Questa tesi si prefigge di presentare i concetti introdotti dalla fisica statistica e gli strumenti per approcciare i problemi di ottimizzazione. 

A partire dai concetti elementari di meccanica statistica, progressivamente, costruiremo gli strumenti appropriati per affrontare lo studio delle transizione di fasi concentrandoci su un metodo chiamato "Replica". 

In particolare si considererà una applicazione di quest’ultimo nel problema della K-Soddisfacibilità Booleana casuale esplorando e analizzando i limiti della sua applicabilità.

====

## Conclusione

La ricerca ha preso in esame gli strumenti della fisica statistica utilizzati nello studio dei problemi di ottimizzazione discreti. 

È stato fatto un accenno alla termodinamica per introdurre le grandezze fisiche come l’energia libera, la magnetizzazione e l’entropia (largamente usate in queste pagine). 

Di seguito, abbiamo usato la  meccanica statistica come ponte tra lo studio termodinamico macroscopico e il modello microscopico interpretato tramite uno studio probabilistico. 

Il modello di Ising ha mostrato l’armonia dell’approccio meccanico statistico enfatizzando il concetto di transizione di fase definita qualitativamente come una trasformazione delle proprietà fisiche di un materiale in seguito a una variazione dei parametri fisici esterni. Abbiamo di seguito introdotto il modello di SK, l’ultimo ingrediente fondamentale di questa tesi: il disordine spento (sistema definito da variabili casuali che non si evolvono nel tempo). 

Questi due modelli insieme al metodo replica hanno permesso di costruire i giusti presupposti per studiare il problema della K-soddisfacibilità booleana casuale da un punto di vista fisico, utilizzando concetti provenienti dalla programmazione matematica ed informatica come la funzione di costo interpretandola come un’energia o l’entropia come il numero di soluzioni esistenti ecc.. . 

L’analisi del random K-SAT è legato, come si è visto, dal parametro  α = M/N densità di clausole il quale può essere visto come il numero di vincoli per variabile booleana. 
Inoltre RS ansatz è fortemente limitato per α(K) → αc(K) mentre per valori di T ≫ 1 lontani dalla transizione di fase si sono ottenuti risultati compatibili sperimentalmente.

Nel caso già menzionato del 3-SAT il tempo impiegato da un algoritmo per determinare se una formula booleana F1, come definita nel capitolo precedente, è soddisfacibile (SAT) o no (UNSAT) dipende dalla densità di clausole α. 

Si è scoperto di fatto che un problema risulta progressivamente risolvibile quanto maggiore si trova al di sotto del valore critico αc, mentre la difficoltà aumenta come α → αc. 

In altre parole, la regione intorno alla transizione di fase è la più difficile da un punto di vista computazionale, in figura 5.1 si osservano i risultati raccolti per K = 3 dove sperimentalmente αc(3) ≃ 4.3 per diversi valori di N = 50,100,150,200 (gli andamenti rappresentati dal basso verso l’alto); rif. [12].

Il RS ansatz ha permesso un approccio vincente nel calcolo del αc(2) = 1 per K = 2, ma fallisce per quanto concerne il valore di αc(K) per K ≥ 3. Lo studio per un numero di letterali maggiore o uguale a 3 richiede di rompere la simmetria delle repliche e introdurre la teoria RSB (Replica Symmetry Breaking)(rif. [14]),
1F = C1 􏰐C2 􏰐···􏰐CM

infatti al di sopra di αze(K), la densità di entropia RS è negativa nonostante debba essere il logaritmo di un numero intero, pertanto la RS Ansatz è chiaramente non interpretabile fisicamente. 

Come previsto per valori di K ≫ 1, rispetto a quelli presi in considerazione, si ha una tendenza: αze(K) → αc(K) da sopra. 

Con la crescita di K le fluttuazioni diminuiscono tale da confermare l’esattezza della teoria RS. 

Questo non è sorprendente dal momento che K può essere interpretato come il numero di "vicini" a cui ogni spin è accoppiato dentro una clausola. Inoltre si è visto che il numero di soluzioni della formula F, cioè la densità di entropia sGS (α), non si annulla appena prima della soglia α = αc(2) ma anzi vale sGS(αc) ≃ 0.38 poco più della metà del valore che possiede ad α(2) = 0 cioè sGS (α) = ln 2 ≃ 0.6931. La transizione brusca stessa è dovuta alla comparsa (con probabilità 1) di loop logici contraddittori in tutte le soluzioni e non alla progressiva diminuzione di queste soluzioni a zero.