let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-26.05";
  pkgs = import nixpkgs { config = {}; overlays = []; };
  kc8_pkgs = import (builtins.fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/nixos-24.05.tar.gz";
  }) {};
in

pkgs.mkShellNoCC {
  packages = [
    kc8_pkgs.kicad
    pkgs.ergogen
    pkgs.openjdk25
  ];
}
