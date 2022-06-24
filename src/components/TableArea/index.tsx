import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    list: Item[]
}

export const TableArea = () => {
    return (
  <C.Table>
    <thead>
        <tr>
            <C.TablheHeadColumn>Data</C.TablheHeadColumn>
            <C.TablheHeadColumn>Categoria</C.TablheHeadColumn>
            <C.TablheHeadColumn>Título</C.TablheHeadColumn>
            <C.TablheHeadColumn>Valor</C.TablheHeadColumn>
        </tr>
    </thead>
    <tbody>

{}
    </tbody>
  </C.Table>
    )
}