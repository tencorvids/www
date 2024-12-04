{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.deno
    pkgs.tailwindcss-language-server
    pkgs.astro-language-server
    pkgs.wrangler
  ];

  shellHook = ''
    echo "Welcome to the Deno development shell!"
    echo "Deno version: $(deno --version)"
  '';
}
