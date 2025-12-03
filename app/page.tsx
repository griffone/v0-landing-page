import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Database, BarChart3, Layout, Zap, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* PLACEHOLDER: Logo will go here */}
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">CD</span>
            </div>
            <span className="text-xl font-bold text-foreground">Chief Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Características
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Precios
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Contacto
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Comenzar</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated blur spots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
            style={{ animation: "blur-float-1 20s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[120px]"
            style={{ animation: "blur-float-2 25s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-primary/15 rounded-full blur-[100px]"
            style={{ animation: "blur-float-3 18s ease-in-out infinite" }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-primary font-medium">Tecnología MCP + IA Avanzada</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Habla con tus datos en <span className="text-primary">lenguaje natural</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Chief Dashboard utiliza inteligencia artificial con tecnología MCP para conectar con tus bases de datos
              Postgres. Obtén insights precisos, genera gráficos y crea dashboards personalizados simplemente
              conversando.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 shadow-lg shadow-primary/20"
              >
                Probar gratis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-foreground border-border hover:bg-card text-lg px-8 bg-transparent backdrop-blur-sm"
              >
                Ver demo
              </Button>
            </div>
          </div>

          {/* PLACEHOLDER: Hero screenshot/mockup will go here */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-2xl shadow-primary/5">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-xl aspect-video flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">
                  [Captura de pantalla: Interfaz de chat con consulta en lenguaje natural y visualización de datos]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Todo lo que necesitas para analizar datos
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Conecta, consulta y visualiza sin escribir una sola línea de SQL
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Consultas en Lenguaje Natural</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pregunta lo que necesites en español. Nuestro motor de IA entiende tus consultas y obtiene los datos
                  correctos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tecnología MCP</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integración avanzada con Postgres mediante Model Context Protocol para conexiones seguras y
                  eficientes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Gráficos y Reportes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Genera automáticamente tablas, gráficos y reportes detallados a partir de tus consultas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dashboards Personalizables</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Agrupa y organiza tus visualizaciones en dashboards arrastrables y totalmente personalizables.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Respuestas Instantáneas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Obtén insights en segundos sin esperar a que el equipo técnico prepare reportes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Conexión Segura</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tus datos permanecen seguros con encriptación de extremo a extremo y cumplimiento con estándares.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Cómo funciona</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Tres pasos simples para comenzar a obtener insights
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Conecta tu Postgres</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vincula tu base de datos Postgres de forma segura con nuestro sistema MCP.
              </p>
              {/* PLACEHOLDER: Screenshot of connection setup */}
              <div className="mt-6 bg-card border border-border rounded-lg p-4">
                <div className="bg-secondary rounded aspect-video flex items-center justify-center">
                  <p className="text-muted-foreground text-sm text-center px-4">[Captura: Panel de conexión]</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Conversa en español</h3>
              <p className="text-muted-foreground leading-relaxed">
                Haz preguntas sobre tus datos como si hablaras con un analista experto.
              </p>
              {/* PLACEHOLDER: Screenshot of chat interface */}
              <div className="mt-6 bg-card border border-border rounded-lg p-4">
                <div className="bg-secondary rounded aspect-video flex items-center justify-center">
                  <p className="text-muted-foreground text-sm text-center px-4">[Captura: Interfaz de chat]</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Crea dashboards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Agrupa tus gráficos y tablas en dashboards personalizados y arrastrables.
              </p>
              {/* PLACEHOLDER: Screenshot of dashboard builder */}
              <div className="mt-6 bg-card border border-border rounded-lg p-4">
                <div className="bg-secondary rounded aspect-video flex items-center justify-center">
                  <p className="text-muted-foreground text-sm text-center px-4">[Captura: Constructor de dashboard]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Casos de uso</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Perfecto para equipos que necesitan insights rápidos
          </p>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-2">📊 Análisis de Ventas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "¿Cuáles fueron nuestras ventas totales el mes pasado?" - Obtén respuestas inmediatas con
                  visualizaciones claras.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-2">👥 Métricas de Usuario</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Muéstrame los usuarios activos por región en los últimos 6 meses" - Consultas complejas en lenguaje
                  simple.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-2">💰 Reportes Financieros</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Compara los ingresos trimestrales de este año con el anterior" - Genera reportes ejecutivos al
                  instante.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Comienza a obtener insights de tus datos hoy
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Sin necesidad de SQL. Sin complicaciones técnicas. Solo conversaciones naturales con tus datos.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              Empezar gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-foreground border-border hover:bg-secondary text-lg px-8 bg-transparent"
            >
              Agendar demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">CD</span>
                </div>
                <span className="font-bold text-foreground">Chief Dashboard</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Análisis de datos con inteligencia artificial en lenguaje natural.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Producto</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Integraciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Documentación
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Seguridad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© 2025 Chief Dashboard. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
