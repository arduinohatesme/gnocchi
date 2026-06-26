module.exports = {
  params: {
    designator: 'J',
    side: 'F',
    B1A: { type: 'net', value: undefined },
    B1B: { type: 'net', value: undefined },
    B2A: { type: 'net', value: undefined },
    B2B: { type: 'net', value: undefined },
    H1: { type: 'net', value: undefined },
    H2: { type: 'net', value: undefined },
    H3: { type: 'net', value: undefined },
    MOUN: { type: 'net', value: undefined },
    V1: { type: 'net', value: undefined },
    V2: { type: 'net', value: undefined },
    V3: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint JOYSTICK`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr virtual)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "B1A" thru_hole circle (at -3.175 ${flipN(flip, -12.7)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.89916) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.B1A})`);
fp.push(`(pad "B1B" thru_hole circle (at 3.175 ${flipN(flip, -12.7)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.89916) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.B1B})`);
fp.push(`(pad "B2A" thru_hole circle (at -3.175 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.89916) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.B2A})`);
fp.push(`(pad "B2B" thru_hole circle (at 3.175 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.89916) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.B2B})`);
fp.push(`(pad "H1" thru_hole circle (at -2.54 ${flipN(flip, 10.16)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.889) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.H1})`);
fp.push(`(pad "H2" thru_hole circle (at 0 ${flipN(flip, 10.16)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.889) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.H2})`);
fp.push(`(pad "H3" thru_hole circle (at 2.54 ${flipN(flip, 10.16)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.889) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.H3})`);
fp.push(`(pad "MOUN" thru_hole circle (at -7.62 ${flipN(flip, -6.6675)} ${flipR(flip, p.r + 0)}) (size 2.286 2.286) (drill 1.397) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.MOUN})`);
fp.push(`(pad "MOUN" thru_hole circle (at -7.62 ${flipN(flip, 6.6675)} ${flipR(flip, p.r + 0)}) (size 2.286 2.286) (drill 1.397) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.MOUN})`);
fp.push(`(pad "MOUN" thru_hole circle (at 7.62 ${flipN(flip, 6.6675)} ${flipR(flip, p.r + 0)}) (size 2.286 2.286) (drill 1.397) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.MOUN})`);
fp.push(`(pad "MOUN" thru_hole circle (at 7.62 ${flipN(flip, -6.6675)} ${flipR(flip, p.r + 0)}) (size 2.286 2.286) (drill 1.397) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.MOUN})`);
fp.push(`(pad "V1" thru_hole circle (at -10.16 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.889) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.V1})`);
fp.push(`(pad "V2" thru_hole circle (at -10.16 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.889) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.V2})`);
fp.push(`(pad "V3" thru_hole circle (at -10.16 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 0)}) (size 1.778 1.778) (drill 0.889) (layers "F&B.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.SilkS" "${(flip ? "B" : "F")}.Mask") ${p.V3})`);

// Drawings on B.SilkS
fp.push(`(fp_text reference >NAME (at -1.905 ${flipN(flip, 4.445)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (effects (font (size 1.27 1.27) (thickness 0.1016)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text value >VALUE (at -1.27 ${flipN(flip, 5.715)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (effects (font (size 1.27 1.27) (thickness 0.1016)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_line (start 5.588 ${flipN(flip, -13.97)}) (end -5.588 ${flipN(flip, -13.97)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 4.826 ${flipN(flip, 11.43)}) (end -4.826 ${flipN(flip, 11.43)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 4.826 ${flipN(flip, 11.43)}) (end 4.826 ${flipN(flip, 8.89)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -4.826 ${flipN(flip, 11.43)}) (end -4.826 ${flipN(flip, 8.89)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 4.826 ${flipN(flip, 8.89)}) (end 7.62 ${flipN(flip, 8.89)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -4.826 ${flipN(flip, 8.89)}) (end -7.62 ${flipN(flip, 8.89)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 9.525 ${flipN(flip, -4.064)}) (end 9.525 ${flipN(flip, 4.064)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 7.62 ${flipN(flip, -4.064)}) (end 7.62 ${flipN(flip, -6.985)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 7.62 ${flipN(flip, 4.064)}) (end 7.62 ${flipN(flip, 8.89)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 7.62 ${flipN(flip, -4.064)}) (end 9.525 ${flipN(flip, -4.064)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 7.62 ${flipN(flip, 4.064)}) (end 9.525 ${flipN(flip, 4.064)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 7.62 ${flipN(flip, -6.985)}) (end 5.588 ${flipN(flip, -6.985)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -5.588 ${flipN(flip, -6.985)}) (end -7.62 ${flipN(flip, -6.985)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 5.588 ${flipN(flip, -13.97)}) (end 5.588 ${flipN(flip, -6.985)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -5.588 ${flipN(flip, -13.97)}) (end -5.588 ${flipN(flip, -6.985)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -7.62 ${flipN(flip, -4.826)}) (end -11.176 ${flipN(flip, -4.826)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -7.62 ${flipN(flip, 4.826)}) (end -11.176 ${flipN(flip, 4.826)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -11.176 ${flipN(flip, -4.826)}) (end -11.176 ${flipN(flip, 4.826)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -7.62 ${flipN(flip, -4.826)}) (end -7.62 ${flipN(flip, -6.985)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -7.62 ${flipN(flip, 4.826)}) (end -7.62 ${flipN(flip, 8.89)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.2032))`);
fp.push(`(fp_circle (center 0 ${flipN(flip, 0)}) (end -0.3175 ${flipN(flip, 0.3175)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.1016))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -1.905 ${flipN(flip, -7.62)}) (end -0.635 ${flipN(flip, -7.62)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start -0.635 ${flipN(flip, -7.62)}) (end 0.635 ${flipN(flip, -8.255)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.2032))`);
fp.push(`(fp_line (start 0.635 ${flipN(flip, -7.62)}) (end 1.905 ${flipN(flip, -7.62)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.2032))`);
fp.push(`(fp_circle (center 0 ${flipN(flip, 0)}) (end -6.35 ${flipN(flip, 6.35)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1016))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }
