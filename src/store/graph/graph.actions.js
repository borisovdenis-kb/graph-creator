const GRAPH_ADD_VERTEX = 'GRAPH_ADD_VERTEX';
const GRAPH_DELETE_VERTEX = 'GRAPH_DELETE_VERTEX';
const GRAPH_ADD_EDGE = 'GRAPH_ADD_EDGE';
const GRAPH_MOVE_VERTEX = 'GRAPH_MOVE_VERTEX';

const GRAPH_UNDO_REDO_MAP = {
  [GRAPH_ADD_VERTEX]: {
    name: 'Add Vertex',
    execute: GRAPH_ADD_VERTEX,
    cancel: GRAPH_DELETE_VERTEX,
    module: 'graph'
  }
};

export {
  GRAPH_ADD_VERTEX,
  GRAPH_DELETE_VERTEX,
  GRAPH_ADD_EDGE,
  GRAPH_MOVE_VERTEX,
  GRAPH_UNDO_REDO_MAP
}
