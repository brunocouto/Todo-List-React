import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.1em;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: ${props => props.background || '#fff'};
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.h2`
  font-size: 2em;
  color: ${props => props.color || '#2c3e50'};
  margin: 0;
`;

const StatLabel = styled.p`
  color: #7f8c8d;
  margin: 5px 0 0;
  font-size: 0.9em;
`;

const TodoForm = styled.form`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  animation: ${fadeIn} 0.5s ease;
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  animation: ${slideIn} 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  cursor: pointer;
  accent-color: #27ae60;
`;

const TodoText = styled.span`
  flex: 1;
  font-size: 16px;
  color: ${props => props.completed ? '#95a5a6' : '#2c3e50'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  transition: all 0.2s;
`;

const DeleteButton = styled(Button)`
  padding: 8px 15px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  font-size: 14px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #7f8c8d;
`;

const DateTimeInput = styled.input`
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s;
  margin-right: 10px;
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

const TodoDateTime = styled.div`
  font-size: 0.9em;
  color: #7f8c8d;
  margin-top: 5px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FilterButton = styled(Button)`
  padding: 8px 15px;
  background: ${props => props.active ? 
    'linear-gradient(135deg, #3498db, #2980b9)' : 
    'linear-gradient(135deg, #95a5a6, #7f8c8d)'};
  font-size: 14px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const StatItem = styled.div`
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  background: ${props => props.background || '#fff'};
  color: #fff;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background: ${props => props.color || '#3498db'};
  transition: width 0.3s ease;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px 0;
`;

const DetailCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const DetailTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.2em;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const DetailItem = styled.div`
  text-align: center;
  padding: 15px;
  background: ${props => props.background || 'rgba(52, 152, 219, 0.1)'};
  border-radius: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const DetailValue = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  color: ${props => props.color || '#2c3e50'};
  margin-bottom: 5px;
`;

const DetailLabel = styled.div`
  font-size: 0.9em;
  color: #7f8c8d;
`;

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [filter, setFilter] = useState('all'); // all, today, week, month

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() && dateTime) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: newTodo.trim(), 
        completed: false,
        dateTime: new Date(dateTime).toISOString()
      }]);
      setNewTodo('');
      setDateTime('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const formatDateTime = (dateTimeStr) => {
    const date = new Date(dateTimeStr);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isToday = (dateTimeStr) => {
    const date = new Date(dateTimeStr);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isThisWeek = (dateTimeStr) => {
    const date = new Date(dateTimeStr);
    const today = new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    return date >= weekStart && date <= weekEnd;
  };

  const isThisMonth = (dateTimeStr) => {
    const date = new Date(dateTimeStr);
    const today = new Date();
    return date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  };

  const filteredTodos = todos
    .filter(todo => {
      switch(filter) {
        case 'today':
          return isToday(todo.dateTime);
        case 'week':
          return isThisWeek(todo.dateTime);
        case 'month':
          return isThisMonth(todo.dateTime);
        default:
          return true;
      }
    })
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = todos.filter(todo => !todo.completed).length;
  const todayTodos = todos.filter(todo => isToday(todo.dateTime)).length;
  const weekTodos = todos.filter(todo => isThisWeek(todo.dateTime)).length;
  const monthTodos = todos.filter(todo => isThisMonth(todo.dateTime)).length;

  // Novas funções para cálculos de estatísticas
  const getTaskStats = () => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;
    const completionRate = total > 0 ? (completed / total) * 100 : 0;

    return {
      total,
      completed,
      pending,
      completionRate: Math.round(completionRate)
    };
  };

  const getTimeStats = () => {
    const overdue = todos.filter(todo => 
      !todo.completed && new Date(todo.dateTime) < new Date()
    ).length;

    const upcoming = todos.filter(todo => 
      !todo.completed && new Date(todo.dateTime) > new Date()
    ).length;

    return { overdue, upcoming };
  };

  const stats = getTaskStats();
  const timeStats = getTimeStats();

  return (
    <AppContainer>
      <Header>
        <Title>Dashboard de Tarefas</Title>
        <Subtitle>Organize suas atividades de forma simples e eficiente</Subtitle>
      </Header>

      <Stats>
        <StatCard background="linear-gradient(135deg, #74b9ff, #0984e3)">
          <StatNumber color="#fff">{stats.total}</StatNumber>
          <StatLabel style={{ color: '#fff' }}>Total de Tarefas</StatLabel>
          <ProgressBar>
            <Progress 
              percentage={stats.completionRate} 
              color="rgba(255, 255, 255, 0.3)"
            />
          </ProgressBar>
        </StatCard>
        <StatCard background="linear-gradient(135deg, #55efc4, #00b894)">
          <StatNumber color="#fff">{stats.completed}</StatNumber>
          <StatLabel style={{ color: '#fff' }}>Tarefas Concluídas</StatLabel>
          <ProgressBar>
            <Progress 
              percentage={100} 
              color="rgba(255, 255, 255, 0.3)"
            />
          </ProgressBar>
        </StatCard>
        <StatCard background="linear-gradient(135deg, #fab1a0, #e17055)">
          <StatNumber color="#fff">{stats.pending}</StatNumber>
          <StatLabel style={{ color: '#fff' }}>Tarefas Pendentes</StatLabel>
          <ProgressBar>
            <Progress 
              percentage={stats.pending / stats.total * 100} 
              color="rgba(255, 255, 255, 0.3)"
            />
          </ProgressBar>
        </StatCard>
      </Stats>

      <StatsContainer>
        <DetailCard>
          <DetailTitle>Visão Geral do Progresso</DetailTitle>
          <DetailGrid>
            <DetailItem background="rgba(52, 152, 219, 0.1)">
              <DetailValue color="#3498db">{stats.completionRate}%</DetailValue>
              <DetailLabel>Taxa de Conclusão</DetailLabel>
            </DetailItem>
            <DetailItem background="rgba(46, 204, 113, 0.1)">
              <DetailValue color="#27ae60">{stats.completed}</DetailValue>
              <DetailLabel>Concluídas</DetailLabel>
            </DetailItem>
            <DetailItem background="rgba(231, 76, 60, 0.1)">
              <DetailValue color="#e74c3c">{timeStats.overdue}</DetailValue>
              <DetailLabel>Atrasadas</DetailLabel>
            </DetailItem>
            <DetailItem background="rgba(241, 196, 15, 0.1)">
              <DetailValue color="#f1c40f">{timeStats.upcoming}</DetailValue>
              <DetailLabel>Próximas</DetailLabel>
            </DetailItem>
          </DetailGrid>
        </DetailCard>

        <DetailCard>
          <DetailTitle>Distribuição Temporal</DetailTitle>
          <DetailGrid>
            <DetailItem background="rgba(155, 89, 182, 0.1)">
              <DetailValue color="#9b59b6">{todayTodos}</DetailValue>
              <DetailLabel>Hoje</DetailLabel>
            </DetailItem>
            <DetailItem background="rgba(52, 152, 219, 0.1)">
              <DetailValue color="#3498db">{weekTodos}</DetailValue>
              <DetailLabel>Esta Semana</DetailLabel>
            </DetailItem>
            <DetailItem background="rgba(230, 126, 34, 0.1)">
              <DetailValue color="#e67e22">{monthTodos}</DetailValue>
              <DetailLabel>Este Mês</DetailLabel>
            </DetailItem>
            <DetailItem background="rgba(149, 165, 166, 0.1)">
              <DetailValue color="#95a5a6">{stats.total}</DetailValue>
              <DetailLabel>Total</DetailLabel>
            </DetailItem>
          </DetailGrid>
        </DetailCard>
      </StatsContainer>

      <TodoForm onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Adicionar nova tarefa..."
        />
        <DateTimeInput
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
        <Button type="submit">Adicionar</Button>
      </TodoForm>

      <FilterContainer>
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          Todas
        </FilterButton>
        <FilterButton 
          active={filter === 'today'} 
          onClick={() => setFilter('today')}
        >
          Hoje ({todayTodos})
        </FilterButton>
        <FilterButton 
          active={filter === 'week'} 
          onClick={() => setFilter('week')}
        >
          Esta Semana ({weekTodos})
        </FilterButton>
        <FilterButton 
          active={filter === 'month'} 
          onClick={() => setFilter('month')}
        >
          Este Mês ({monthTodos})
        </FilterButton>
      </FilterContainer>

      <TodoList>
        {filteredTodos.length === 0 ? (
          <EmptyState>
            <h3>Nenhuma tarefa encontrada</h3>
            <p>Adicione uma nova tarefa ou ajuste os filtros</p>
          </EmptyState>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem key={todo.id}>
              <Checkbox
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <div style={{ flex: 1 }}>
                <TodoText completed={todo.completed}>{todo.text}</TodoText>
                <TodoDateTime>{formatDateTime(todo.dateTime)}</TodoDateTime>
              </div>
              <DeleteButton onClick={() => deleteTodo(todo.id)}>
                Excluir
              </DeleteButton>
            </TodoItem>
          ))
        )}
      </TodoList>

      <StatsGrid>
        <StatItem background="linear-gradient(135deg, #a8e6cf, #1b9c85)">
          <h3>Hoje</h3>
          <p>{todayTodos} tarefas</p>
        </StatItem>
        <StatItem background="linear-gradient(135deg, #ddd6f3, #faaca8)">
          <h3>Esta Semana</h3>
          <p>{weekTodos} tarefas</p>
        </StatItem>
        <StatItem background="linear-gradient(135deg, #ffd3b6, #ff8b94)">
          <h3>Este Mês</h3>
          <p>{monthTodos} tarefas</p>
        </StatItem>
      </StatsGrid>
    </AppContainer>
  );
}

export default App;
