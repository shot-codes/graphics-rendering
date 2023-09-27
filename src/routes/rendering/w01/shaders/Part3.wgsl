struct VSOut {
  @builtin(position) position: vec4f,
  @location(0) coords: vec2f,
}

@vertex
fn vertexMain(@builtin(vertex_index) VertexIndex: u32) -> VSOut {
  const pos = array<vec2f, 4>(vec2f(-1.0, 1.0), vec2f(-1.0, -1.0), vec2f(1.0, 1.0), vec2f(1.0, -1.0));
  var vsOut: VSOut;
  vsOut.position = vec4f(pos[VertexIndex], 0.0, 1.0);
  vsOut.coords = pos[VertexIndex];
  return vsOut;
}

@fragment
fn fragmentMain(@location(0) coords: vec2f) -> @location(0) vec4f {
  let uv = coords * 0.5;
  return vec4f(0.1, 0.3, 0.6, 1);
}

