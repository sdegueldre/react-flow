import { memo, FC } from 'react';
import { Handle, Position, NodeProps, NodeToolbar } from 'reactflow';

const CustomNode: FC<NodeProps> = ({ id, data }) => {
  return (
    <>
      <NodeToolbar nodeId={id} isVisible={data.toolbarVisible} position={data.toolbarPosition}>
        <button>delete</button>
        <button>copy</button>
        <button>expand</button>
      </NodeToolbar>
      <div>{data.label}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(CustomNode);
