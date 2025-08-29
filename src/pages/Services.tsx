import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import {
  IconPlus,
  IconSettings,
  IconDots,
  IconEdit,
  IconTrash,
  IconEye,
  IconCalendar,
  IconUsers,
} from '@tabler/icons-react'

export function ServicesPage() {
  const services = [
    {
      id: 1,
      name: 'Consultoria Técnica',
      status: 'Ativo',
      description: 'Consultoria especializada em desenvolvimento de software.',
      clients: 15,
      revenue: 'R$ 25.000',
      progress: 85,
      category: 'Desenvolvimento',
      startDate: '2024-01-15',
      manager: 'João Silva',
    },
    {
      id: 2,
      name: 'Desenvolvimento Web',
      status: 'Ativo',
      description: 'Criação de aplicações web modernas e responsivas.',
      clients: 8,
      revenue: 'R$ 18.500',
      progress: 92,
      category: 'Desenvolvimento',
      startDate: '2024-02-01',
      manager: 'Maria Santos',
    },
    {
      id: 3,
      name: 'Manutenção de Sistemas',
      status: 'Pausado',
      description: 'Suporte e manutenção de sistemas existentes.',
      clients: 3,
      revenue: 'R$ 5.200',
      progress: 45,
      category: 'Suporte',
      startDate: '2024-03-10',
      manager: 'Pedro Costa',
    },
    {
      id: 4,
      name: 'Treinamentos',
      status: 'Planejado',
      description: 'Capacitação em tecnologias modernas.',
      clients: 0,
      revenue: 'R$ 0',
      progress: 10,
      category: 'Educação',
      startDate: '2024-05-01',
      manager: 'Ana Lima',
    },
  ]

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Ativo':
        return 'default'
      case 'Pausado':
        return 'secondary'
      case 'Planejado':
        return 'outline'
      default:
        return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Serviços</h1>
          <p className="text-muted-foreground">
            Gerencie todos os serviços oferecidos pela empresa.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <IconSettings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <IconPlus className="mr-2 h-4 w-4" />
                Novo Serviço
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Criar Novo Serviço</DialogTitle>
                <DialogDescription>
                  Preencha as informações para criar um novo serviço.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    placeholder="Nome do serviço"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Categoria
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="desenvolvimento">
                        Desenvolvimento
                      </SelectItem>
                      <SelectItem value="suporte">Suporte</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="manager" className="text-right">
                    Gerente
                  </Label>
                  <Input
                    id="manager"
                    placeholder="Nome do gerente"
                    className="col-span-3"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="active" />
                  <Label htmlFor="active">Ativar serviço imediatamente</Label>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancelar</Button>
                <Button>Criar Serviço</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="cards" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cards">Cartões</TabsTrigger>
          <TabsTrigger value="table">Tabela</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="cards" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <IconDots className="h-4 w-4" />
                          <span className="sr-only">Abrir menu de ações</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <IconEye className="mr-2 h-4 w-4" />
                          Visualizar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconEdit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <IconTrash className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={getStatusVariant(service.status)}>
                      {service.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {service.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{service.progress}%</span>
                    </div>
                    <Progress value={service.progress} className="h-2" />
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <IconUsers className="h-4 w-4 text-muted-foreground" />
                      <span>{service.clients} clientes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconCalendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {new Date(service.startDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-semibold text-lg">
                      {service.revenue}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Gerente: {service.manager}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="table" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Serviços</CardTitle>
              <CardDescription>
                Visualização detalhada de todos os serviços em formato de
                tabela.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Clientes</TableHead>
                    <TableHead>Receita</TableHead>
                    <TableHead>Progresso</TableHead>
                    <TableHead>Gerente</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell className="font-medium">
                        {service.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(service.status)}>
                          {service.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{service.category}</TableCell>
                      <TableCell>{service.clients}</TableCell>
                      <TableCell>{service.revenue}</TableCell>
                      <TableCell>
                        <div className="w-20">
                          <Progress value={service.progress} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>{service.manager}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <IconDots className="h-4 w-4" />
                              <span className="sr-only">
                                Abrir menu de ações
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <IconEye className="mr-2 h-4 w-4" />
                              Visualizar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <IconEdit className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <IconTrash className="mr-2 h-4 w-4" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance por Categoria</CardTitle>
                <CardDescription>
                  Distribuição de receita por categoria de serviço.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Desenvolvimento</span>
                    <span>R$ 43.500 (89%)</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Suporte</span>
                    <span>R$ 5.200 (11%)</span>
                  </div>
                  <Progress value={11} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Educação</span>
                    <span>R$ 0 (0%)</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas Gerais</CardTitle>
                <CardDescription>
                  Estatísticas importantes dos serviços.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Total de Serviços</p>
                    <p className="text-2xl font-bold">4</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Serviços Ativos</p>
                    <p className="text-2xl font-bold text-green-600">2</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Total de Clientes</p>
                    <p className="text-2xl font-bold">26</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Receita Total</p>
                    <p className="text-2xl font-bold">R$ 48.700</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Default export for lazy loading
export default ServicesPage
