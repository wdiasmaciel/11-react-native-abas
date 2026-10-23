import { Tabs } from 'expo-router';

export default function LayoutAbas() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Principal' }} />
      <Tabs.Screen name="detalhe" options={{ title: 'Detalhe' }} />
      <Tabs.Screen name="carrinho" options={{ title: 'Carrinho' }} />
    </Tabs>
  );
}
