// totally original, not stolen from a better programmer for hte second time
(function(){
    const args = parseArguments(argument);

    if (args.length === 0) return "specify true or false cheesehead";
    if (UnitTypes[args[0]] == null) return "invalid value"

    Vars.state.rules.fog=args[0]
    })

    return args[0] + " dead, probably"
})();
