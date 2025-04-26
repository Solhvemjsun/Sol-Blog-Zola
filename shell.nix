let
  pkgs = import <nixpkgs> {};
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    zola
  ];

  shellHook = ''
    echo "Type 'zola serve' to open the live reloading website"
    echo "Type 'zola build' to build the whole website to ./public"
  '';
}
