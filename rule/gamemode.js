if(typeof ts === 'undefined') ts = {}; ts.currentScriptName = "gamemode";
if(typeof ts[ts.currentScriptName] === 'undefined') ts[ts.currentScriptName] = {};
ts[ts.currentScriptName].function = function(){
    const state = ts[ts.currentScriptName];
    //how
    
    if (args.length === 0) {
        Vars.scripter.sendMessage("Provide a gamemode to change to");
        return;
    }
    
    var gamemode = args[0];
    var hardmode = Vars.state.rules.waveSpacing / 2 //and i messed up agaain.
    
    if (gamemode === "attack") {
        Vars.state.rules.attackMode = true; 
        Vars.state.rules.waveTimer = false; 
        Vars.state.rules.pvp = false; 
        Vars.scripter.sendMessage("Gamemode set to attack");
      
    } else if (gamemode === "survival") {
        Vars.state.rules.attackMode = false; 
        Vars.state.rules.waveTimer = true; 
        Vars.state.rules.pvp = false; 
        Vars.scripter.sendMessage("Gamemode set to survival");
        
    } else if (gamemode === "hardmode") {
       js Vars.state.rules.waveSpacing = hardmode;
       Vars.scripter.sendMessage("Gamemode set to hardmode");
       
    } else if (gamemode === "sandbox") {
        Vars.state.rules.attackMode = false; 
        Vars.state.rules.waveTimer = false; 
        Vars.state.rules.pvp = false;
        Vars.scripter.sendMessage("Gamemode set to sandbox");
        
    } else {
        Vars.scripter.sendMessage("'" + gamemode + "' is not a valid gamemode");
    }
    
    Call.onSetRules(Vars.state.rules);
}
ts[ts.currentScriptName].function();
0;
