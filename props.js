// Props składa się z atrybutów
// jeśli podamy wartość ale nie przypiszemy jej

// Obiekt props znajduje się w każdym komponencie. Komponent stanowy - odwołujemy się przez this.props

//Znaczniki HTML mają atrybuty (na przykład class, style, src), które, można powiedzieć, w jakiś sposób konfigurują zachowanie znacznika. Komponenty React nie mają atrybutów. Komponenty posiadają jednak właściwości (inna nazwa: props), które pełnią taką samą rolę jak atrybuty HTML dla znaczników HTML. Właściwości są otrzymywane od "góry" (zazwyczaj bezpośrednio od rodzica) i nie mogą być nadpisywane (dlatego można powiedzieć, że są niezmienne, jeśli pochodzą od "góry").

// Props jest tylko do odczytu (nie można go zmieniać!)

// Props powinny być zmieniane tylko w komponencie, w którym zostały stworzone za pomocą atrybutu (nowa wartość zostanie zaktualizowana w wyniku ponownego renderowania rodzica)

// 