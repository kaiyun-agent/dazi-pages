/** SDK 绘制结果适配。只读取数据，不修改 SDK 记录。 */
export function collectDrawingPoints(records) {
  const points = [];
  let invalidCount = 0;
  function add(lon, lat) {
    if (typeof lon !== 'number' || typeof lat !== 'number' || !Number.isFinite(lon) || !Number.isFinite(lat) || lon < -180 || lon > 180 || lat < -90 || lat > 90) {
      invalidCount++;
      return;
    }
    points.push([lon, lat]);
  }
  function visit(value) {
    if (Array.isArray(value)) {
      if (value.length >= 2 && !Array.isArray(value[0]) && (typeof value[0] !== 'object' || value[0] === null)) {
        add(value[0], value[1]);
      } else {
        value.forEach(visit);
      }
      return;
    }
    if (value && typeof value === 'object' && ('longitude' in value || 'latitude' in value)) {
      add(value.longitude, value.latitude);
      return;
    }
    invalidCount++;
  }
  if (Array.isArray(records)) records.forEach(record => visit(record?.coordinates));
  return { points, invalidCount };
}

/** 同一位置的重复顶点（包括闭合点）只计一次。 */
export function distinctPoints(points) {
  const seen = new Set();
  return points.filter(([lon, lat]) => {
    const key = `${lon.toFixed(9)},${lat.toFixed(9)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function hasNonCollinearVertices(points) {
  if (points.length < 3) return false;
  const [a, b] = points;
  return points.slice(2).some(c => Math.abs((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0])) > 1e-12);
}
