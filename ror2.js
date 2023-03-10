$(document).ready(function() {
//Filter functions
//Toggle DLC
$(".dlc_check").click(function() {
    $(".dlc").toggle(this.checked);
});
//Toggle Commons
$(".common_check").click(function() {
    $(".common").toggle(this.checked);
});
//Toggle Uncommons
$(".uncommon_check").click(function() {
    $(".uncommon").toggle(this.checked);
});
//Toggle Legendaries
$(".legendary_check").click(function() {
    $(".legendary").toggle(this.checked);
});
//Toggle Boss
$(".boss_check").click(function() {
    $(".boss").toggle(this.checked);
});
//Toggle Lunars
$(".lunar_check").click(function() {
    $(".lunar").toggle(this.checked);
});

//Functions for entering item notes into epmty elements
//The append() and empty() methods are used so that HTML tags can be interpreted
//1 line to hide <h2> element on page load
$("#itemName").hide();
function itemDisplay(item, itemText) {
    $("#itemName").show();
    $("#itemName").append(item);
    $("#itemDisplay").append(this.innerHTML);
    $("#itemDescription").append(itemText);
};
function sidebarReset() {
    $("#itemName").hide();
    $("#itemName").empty();
    $("#itemDisplay").empty();
    $("#itemDescription").empty();
};

//Event Listener tied to resizing of #main element when scaling window
//Used for adding extra space to the bottom of <body> so that items are unobscured by 'fixed' sidebar
function resizeHeight () {
    let elemHeight = $("#main").height();
    //JS Media Query to perform function only when viewport is 768px or less
    let phoneMedia = window.matchMedia("(max-width: 1023px)");
    if (phoneMedia.matches) {
        document.body.style.height = elemHeight + 200 +"px";
    } else {
        document.body.style.height = elemHeight + "px";
    };
};
$(window).on("load", function() {
    resizeHeight();
});
window.addEventListener('resize', resizeHeight);

//~1674 lines for every item
//---------------------------   COMMON    -------------------------------------------
//Armor Piercing Rounds
$("#armor_piercing_rounds").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Armor-Piercing Rounds",
                            "Deal an additional <span class='dmg'>+20%</span> <span class='stack'>(+20% per stack)</span> <span class='dmg'>damage</span> to <span class='dmg'>Bosses</span>."
                    );
    //Extra notes
});
$("#armor_piercing_rounds").mouseleave(sidebarReset);
//Backup Magazine
$("#backup_magazine").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Backup Magazine",
                            "Gain <span class='util'>+1</span> <span class='stack'>(+1 per stack)</span> charge of your <span class='util'>secondary skill</span>."
                    );
});
$("#backup_magazine").mouseleave(sidebarReset);
//Bison Steak
$("#bison_steak").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Bison Steak",
                            "Increases <span class='hpUP'>maximum health</span> by <span class='hpUP'>+25</span> <span class='stack'>(+25 per stack)</span>."
                    );
});
$("#bison_steak").mouseleave(sidebarReset);
//Bundle of Fireworks
$("#bundle_of_fireworks").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Bundle of Fireworks",
                            "Activating an interactable <span class='dmg'>launches 8</span> <span class='stack'>(+4 per stack)</span> <span class='dmg'>fireworks</span> that deal <span class='dmg'>300% base damage</span>."
                    );
});
$("#bundle_of_fireworks").mouseleave(sidebarReset);
//Bustling Fungus
$("#bustling_fungus").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Bustling Fungus",
                            "After <span class='util'>standing still</span> for <span class='hpUP'>1s</span>, create a zone that <span class='hpUP'>heals</span> for <span class='hpUP'>4.5%</span> <span class='stack'>(+2.25% per stack)</span> of your health <span class='hpUP'>every second</span> to all allies <span class='util'>within 3m</span> <span class='stack'>(+1.5m per stack)</span>."
                    );
});
$("#bustling_fungus").mouseleave(sidebarReset);
//Cautious Slug
$("#cautious_slug").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Cautious Slug",
                            "Increases <span class='hpUP'>base health regen</span> by <span class='hpUP'>+3 hp/s</span> <span class='stack'>(+3 hp/s per stack)</span> while <span class='util'>outside of combat</span>."
                    );
});
$("#cautious_slug").mouseleave(sidebarReset);
//Crowbar
$("#crowbar").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Crowbar",
                            "Deal <span class='dmg'>+75%</span> <span class='stack'>(+75% per stack)</span> <span class='dmg'>damage</span> to enemies above <span class='hpLimit'>90% health</span>."
                    );
});
$("#crowbar").mouseleave(sidebarReset);
//Delicate Watch
$("#delicate_watch").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Delicate Watch",
                            "Increase <span class='dmg'>damage</span> by <span class='dmg'>+20%</span> <span class='stack'>(+20% per stack)</span>. Taking damage to below <span class='hpLimit'>25% health</span> <span class='util'>breaks this item</span>."
                    );
});
$("#delicate_watch").mouseleave(sidebarReset);
//Energy Drink
$("#energy_drink").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Energy Drink",
                            "<span class='util'>Sprint speed</span> is improved by <span class='util'>+25%</span> <span class='stack'>(+25% per stack)</span>."
                    );
});
$("#energy_drink").mouseleave(sidebarReset);
//Focus Crystal
$("#focus_crystal").mouseenter(function() {
    sidebarReset();
    itemDisplay.call(this,  "Focus Crystal",
                            "Increase <span class='dmg'>damage</span> to enemies <span class='util'>within 13m</span> by <span class='dmg'>+20%</span> <span class='stack'>(+20% per stack)</span>."
                    );
});
$("#focus_crystal").mouseleave(sidebarReset);
//Gasoline
$("#gasoline").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Gasoline",
                            "Killing an enemy <span class='dmg'>ignites enemies</span> <span class='util'>within 12m</span> <span class='stack'>(+4m per stack)</span> for <span class='dmg'>150% base damage</span>. Additionally, <span class='dmg'>enemies burn</span> for <span class='dmg'>150%</span> <span class='stack'>(+75% per stack)</span> <span class='dmg'>base damage</span>."
                    );
});
$("#gasoline").mouseleave(sidebarReset);
//Lens-Maker's Glasses
$("#lens_maker_glasses").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Lens-Maker's Glasses",
                            "Your attacks have a <span class='dmg'>+10%</span> <span class='stack'>(+10% per stack)</span> chance to <span class='dmg'>Critically Strike</span>, dealing <span class='dmg'>double damage</span>."
                    );
});
$("#lens_maker_glasses").mouseleave(sidebarReset);
//Medkit
$("#medkit").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Medkit",
                            "<span class='util'>After 2s</span> from being hurt, <span class='hpUP'>heal 20</span> plus an additional <span class='hpUP'>5%</span> <span class='stack'>(+5% per stack)</span> of <span class='hpUP'>Maximum Health</span>."
                    );
});
$("#medkit").mouseleave(sidebarReset);
//Mocha
$("#mocha").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Mocha",
                            "Increases <span class='dmg'>attack speed</span> by <span class='dmg'>+7.5%</span> <span class='stack'>(+7.5% per stack)</span> and <span class='util'>movement speed</span> by <span class='util'>7%</span> <span class='stack'>(+7% per stack)</span>."
                    );
});
$("#mocha").mouseleave(sidebarReset);
//Monster Tooth
$("#monster_tooth").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Monster Tooth",
                            "Killing an enemy spawns a <span class='hpUP'>healing orb</span> that heals for <span class='hpUP'>8</span> plus an additional <span class='hpUP'>2%</span> <span class='stack'>(+2% per stack)</span> of <span class='hpUP'>Maximum Health</span>."
                    );
});
$("#monster_tooth").mouseleave(sidebarReset);
//Oddly-Shaped Opal
$("#oddly_shaped_opal").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Oddly-Shaped Opal",
                            "Gain a <span class='hpUP'>bubble</span> with <span class='hpUP'>100</span> <span class='stack'>(+100 per stack)</span> <span class='hpUP'>health</span> while out of combat. The bubble is regained while out of danger."
                    );
});
$("#oddly_shaped_opal").mouseleave(sidebarReset);
//Paul's Goat Hoof
$("#pauls_goat_hoof").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Paul's Goat Hoof",
                            "Increases <span class='util'>movement speed</span> by <span class='util'>+14%</span> <span class='stack'>(+14% per stack)</span>."
                    );
});
$("#pauls_goat_hoof").mouseleave(sidebarReset);
//Personal Shield Generator
$("#personal_shield_generator").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Personal Shield Generator",
                            "Gain a <span class='hpUP'>shield</span> equal to <span class='hpUP'>8%</span> <span class='stack'>(+8% per stack)</span> of your <span class='hpUP'>Maximum Health</span>. Recharges outside of danger."
                    );
});
$("#personal_shield_generator").mouseleave(sidebarReset);
//Power Elixir
$("#power_elixir").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Power Elixir",
                            "Once you fall below <span class='hpLimit'>25% health</span>, consume this item and <span class='hpUP'>heal 75%</span> of your <span class='hpUP'>Maximum Health</span>."
                    );
});
$("#power_elixir").mouseleave(sidebarReset);
//Repulsion Armor Plate
$("#repulsion_armor_plate").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Repulsion Armor Plate",
                            "Reduce all <span class='dmg'>incoming damage</span> by <span class='dmg'>5</span> <span class='stack'>(+5 per stack)</span>. Cannot be reduced below <span class='dmg'>1</span>."
                    );
});
$("#repulsion_armor_plate").mouseleave(sidebarReset);
//Roll of Pennies
$("#roll_of_pennies").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Roll of Pennies",
                            "Gain <span class='util'>3</span> <span class='stack'>(+3 per stack)</span> <span class='util'>gold</span> on <span class='dmg'>taking damage</span> from an enemy. <span class='util'>Gold earnt</span> scales as <span class='util'>12% cost</span> of a <span class='util'>small chest</span>."
                    );
});
$("#roll_of_pennies").mouseleave(sidebarReset);
//Rusted Key
$("#rusted_key").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Rusted Key",
                            "Gain a key that opens a <span class='util'>hidden chache</span> containing an item of increased rarity (<span class='hpUP'>80%</span>/<span class='hpLimit'>20%</span>) in a random location on <span class='util'>each future stage</span>. Opening the cache <span class='util'>consumes</span> this item."
                    );
});
$("#rusted_key").mouseleave(sidebarReset);
//Soldier's Syringe
$("#soldier_syringe").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Soldier's Syringe",
                            "Increases <span class='dmg'>attack speed</span> by <span class='dmg'>+15%</span> <span class='stack'>(+15% per stack)</span>."
                    );
});
$("#soldier_syringe").mouseleave(sidebarReset);
//Soldier's Syringe
$("#soldier_syringe").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Soldier's Syringe",
                            "Increases <span class='dmg'>attack speed</span> by <span class='dmg'>+15%</span> <span class='stack'>(+15% per stack)</span>."
                    );
});
$("#soldier_syringe").mouseleave(sidebarReset);
//Sticky Bomb
$("#sticky_bomb").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Sticky Bomb",
                            "<span class='util'>5%</span> <span class='stack'>(+5% per stack)</span> <span class='util'>chance</span> on hit to attach a <span class='dmg'>bomb</span> to an enemy, detonating for <span class='dmg'>180% attack damage</span>."
                    );
});
$("#sticky_bomb").mouseleave(sidebarReset);
//Stun Grenade
$("#stun_grenade").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Stun Grenade",
                            "<span class='util'>5%</span> <span class='stack'>(+5% on stack)</span> <span class='util'>chance</span> on hit to <span class='util'>stun</span> enemies for <span class='util'>2s</span>."
                    );
});
$("#stun_grenade").mouseleave(sidebarReset);
//Topaz Brooch
$("#topaz_brooch").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Topaz Brooch",
                            "Gain a temporary <span class='hpUP'>barrier</span> on kill equal to <span class='hpUP'>15 health</span> <span class='stack'>(+15 per stack)</span>."
                    );
});
$("#topaz_brooch").mouseleave(sidebarReset);
//Tougher Times
$("#tougher_times").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Tougher Times",
                            "<span class='util'>15%</span> <span class='stack'>(+15% per stack)</span> <span class='util'>chance</span> to <span class='hpUP'>block</span> <span class='dmg'>incoming damage</span>. <span class='util'>Unaffected by luck</span>."
                    );
});
$("#tougher_times").mouseleave(sidebarReset);
//Tri-Tip Dagger
$("#tri_tip_dagger").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Tri-Tip Dagger",
                            "<span class='util'>10%</span> <span class='stack'>(+10% per stack)</span> <span class='util'>chance</span> to <span class='dmg'>bleed</span> an enemy for <span class='dmg'>240% base damage</span>."
                    );
});
$("#tri_tip_dagger").mouseleave(sidebarReset);
//Warbanner
$("#warbanner").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Warbanner",
                            "On <span class='util'>LvL Up</span> or <span class='util'>starting the Teleporter</span>, drop a banner that raises <span class='dmg'>attack speed</span> and <span class='util'>movement speed</span> by <span class='dmg'>+30%</span> of all allies <span class='util'>within 16m</span> <span class='stack'>(+8m per stack)</span>."
                    );
});
$("#warbanner").mouseleave(sidebarReset);
//---------------------------   UNCOMMON    -----------------------------------------
//AtG Missile Mk.1
$("#atg_missile_mk").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "AtG Missile Mk.1",
                            "<span class='util'>10% chance</span> to fire a <span class='dmg'>missile</span> that deals <span class='dmg'>300%</span> <span class='stack'>(+300% per stack)</span> <span class='dmg'>attack damage</span>."
                    );
});
$("#atg_missile_mk").mouseleave(sidebarReset);
//Bandolier
$("#bandolier").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Bandolier",
                            "<span class='util'>18%</span> <span class='stack'>(+10% per stack)</span> <span class='util'>chance</span> on kill to drop an ammo pack that <span class='util'>resets all skill cooldowns</span>."
                    );
});
$("#bandolier").mouseleave(sidebarReset);
//Berzerker's Pauldron
$("#berzerkers_pauldron").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Berzerker's Pauldron",
                            "<span class='dmg'>Killing 4 enemies</span> <span class='util'>within 1s</span> sends you into a <span class='dmg'>frenzy</span> that increases <span class='util'>movement speed</span> by <span class='util'>+50%</span> and <span class='dmg'>attack speed</span> by <span class='dmg'>+100%</span> for <span class='util'>6s</span> <span class='stack'>(+4s per stack)</span>."
                    );
});
$("#berzerkers_pauldron").mouseleave(sidebarReset);
//Chronobauble
$("#chronobauble").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Chronobauble",
                            "<span class='util'>Slow</span> enemies on hit for <span class='util'>-60% movement speed</span> for <span class='util'>2s</span> <span class='stack'>(+2s per stack)</span>."
                    );
});
$("#chronobauble").mouseleave(sidebarReset);
//Death Mark
$("#death_mark").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Death Mark",
                            "Enemies with <span class='util'>4 or more debuffs</span> are <span class='dmg'>marked for death</span>, increasing <span class='dmg'>damage</span> taken by <span class='dmg'>+50%</span> from all sources for <span class='util'>7s</span> <span class='stack'>(+7s per stack)</span>."
                    );
});
$("#death_mark").mouseleave(sidebarReset);
//Fuel Cell
$("#fuel_cell").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Fuel Cell",
                            "Hold an <span class='util'>additional equipment charge</span> <span class='stack'>(+1 per stack)</span>. Reduce <span class='util'>equipment cooldown</span> by <span class='util'>-15%</span> <span class='stack'>(-15% per stack)</span>."
                    );
});
$("#fuel_cell").mouseleave(sidebarReset);
//Ghor's Tome
$("#ghors_tome").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Ghor's Tome",
                            "<span class='util'>4%</span> <span class='stack'>(+4% per stack)</span> <span class='util'>chance</span> on kill to drop a <span class='util'>treasure</span> worth an amount of <span class='util'>gold</span> equal to a <span class='util'>small chest</span>."
                    );
});
$("#ghors_tome").mouseleave(sidebarReset);
//Harvester's Scythe
$("#harvesters_scythe").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Harvester's Scythe",
                            "Gain <span class='dmg'>+5% critical chance</span>. <span class='dmg'>Critical strikes</span> <span class='hpUP'>heal</span> for <span class='hpUP'>8</span> <span class='stack'>(+4 per stack)</span> <span class='hpUP'>health</span>."
                    );
});
$("#harvesters_scythe").mouseleave(sidebarReset);
//Hopoo Feather
$("#hopoo_feather").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Hopoo Feather",
                            "Gain <span class='util'>+1</span> <span class='stack'>(+1 per stack)</span> maximum <span class='util'>jump</span> count."
                    );
});
$("#hopoo_feather").mouseleave(sidebarReset);
//Hunter's Harpoon
$("#hunters_harpoon").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Hunter's Harpoon",
                            "Killing an enemy increases <span class='util'>movement speed</span> by <span class='util'>+125%</span>, fading over <span class='util'>1s</span> <span class='stack'>(+0.5s per stack)</span>."
                    );
});
$("#hunters_harpoon").mouseleave(sidebarReset);
//Ignition Tank
$("#ignition_tank").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Ignition Tank",
                            "<span class='dmg'>Ignite effects</span> deal <span class='dmg'>+300%</span> <span class='stack'>(+300% per stack)</span> more <span class='dmg'>damage</span> over time."
                    );
});
$("#ignition_tank").mouseleave(sidebarReset);
//Infusion
$("#infusion").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Infusion",
                            "Killing an enemy increases your <span class='hpUP'>permanent health</span> by <span class='hpUP'>+1</span> up to <span class='hpUP'>+100</span> <span class='stack'>(+100 per stack)</span> <span class='hpUP'>health</span>."
                    );
});
$("#infusion").mouseleave(sidebarReset);
//Kjaro's Band
$("#kjaros_band").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Kjaro's Band",
                            "When an attack deals <span class='dmg'>400% or more damage</span>, enemies are hit with a <span class='dmg'>runic flame tornado</span>, dealing <span class='dmg'>300%</span> <span class='stack'>(+300% per stack)</span> <span class='dmg'>attack damage</span> over time. Recharges every <span class='util'>10s</span>."
                    );
});
$("#kjaros_band").mouseleave(sidebarReset);
//Leeching Seed
$("#leeching_seed").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Leeching Seed",
                            "<span class='dmg'>Each hit</span> on an enemy <span class='hpUP'>heals</span> you for <span class='hpUP'>1</span> <span class='stack'>(+1 per stack)</span> <span class='hpUP'>health</span>."
                    );
});
$("#leeching_seed").mouseleave(sidebarReset);
//Lepton Daisy
$("#lepton_daisy").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Lepton Daisy",
                            "Releases a <span class='hpUP'>healing burst</span> during the teleporter event, <span class='hpUP'>healing</span> allies for <span class='hpUP'>50%</span> of their <span class='hpUP'>maximum health</span>. Occurs <span class='util'>1</span> <span class='stack'>(+1 per stack)</span> <span class='util'>times</span>."
                    );
});
$("#lepton_daisy").mouseleave(sidebarReset);
//Old Guillotine
$("#old_guillotine").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Old Guillotine",
                            "Instantly <span class='dmg'>kill Elite</span> enemies below <span class='hpLimit'>13%</span> <span class='stack'>(+13% per stack)</span> <span class='hpLimit'>health</span>."
                    );
});
$("#old_guillotine").mouseleave(sidebarReset);
//Old War Stealthkit
$("#old_war_stealthkit").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Old War Stealthkit",
                            "Falling below <span class='hpLimit'>25% health</span> causes you to become <span class='util'>invisible</span> and gain <span class='util'>+40% movement speed</span> for <span class='util'>5s</span>. Recharges every <span class='util'>30s</span> <span class='stack'>(-50% per stack)</span>."
                    );
});
$("#old_war_stealthkit").mouseleave(sidebarReset);
//Predatory Instincts
$("#predatory_instincts").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Predatory Instincts",
                            "Gain <span class='dmg'>5% critical chance</span>. <span class='dmg'>Critical strikes</span> increase <span class='dmg'>attack speed</span> by <span class='dmg'>+12%</span>. Maximum cap of <span class='dmg'>36%</span> <span class='stack'>(+24% per stack)</span> <span class='dmg'>attack speed</span>."
                    );
});
$("#predatory_instincts").mouseleave(sidebarReset);
//------------------------------   LUNAR    ------------------------------------------
//Beads of Fealty
$("#beads_of_fealty").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Beads of Fealty",
                            "Seems to do nothing... <span class='hpLimit'>but...</span> When you activate <span class='util'>The Obelisk</span> you are transported to <span class='util'>A Moment, Whole</span> before <span class='hpLimit'>ending the run</span>."
                    );
});
$("#beads_of_fealty").mouseleave(sidebarReset);
//Brittle Crown
$("#brittle_crown").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Brittle Crown",
                            "<span class='util'>+30% chance on hit</span> to gain <span class='util'>2</span> <span class='stack'>(+2 per stack)</span> <span class='util'>gold</span>. <span class='util'>Gold earnt</span> scales as <span class='util'>12% cost</span> of a <span class='util'>small chest</span>. <br><span class='hpLimit'>Lose gold</span> equal to <span class='hpLimit'>100%</span> <span class='stack'>(+100% per stack)</span> of <span class='hpLimit'>maximum health percentage</span> you lost <span class='hpLimit'>from damage</span>."
                    );
});
$("#brittle_crown").mouseleave(sidebarReset);
//Corpsebloom
$("#corpsebloom").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Corpsebloom",
                            "<span class='hpUP'>Heal 100%</span> <span class='stack'>(+100% per stack)</span> more. <span class='hpUP'>All healing</span> is <span class='util'>applied over time</span>. Can <span class='hpUP'>heal</span> for a <span class='hpUP'>maximum of 10%</span> <span class='stack'>(-50% per stack)</span> of your <span class='hpUP'>health per second</span>."
                    );
});
$("#corpsebloom").mouseleave(sidebarReset);
//Defiant Gouge
$("#defiant_gouge").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Defiant Gouge",
                            "Using a <span class='util'>Shrine</span> summons <span class='hpLimit'>enemies</span> <span class='stack'>(stronger per stack)</span> nearby. <span class='util'>Scales over time</span>."
                    );
});
$("#defiant_gouge").mouseleave(sidebarReset);
//Egocentrism
$("#egocentrism").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Egocentrism",
                            "Every <span class='util'>3s</span> <span class='stack'>(-50% per stack)</span>, gain an <span class='util'>orbiting bomb</span> that detonates on impact for <span class='dmg'>360% damage</span>, up to a <span class='util'>maximum of 3 bombs</span> <span class='stack'>(+1 per stack)</span>. Every <span class='util'>60s</span>, a random item is <span class='util'>converted</span> into this item."
                    );
});
$("#egocentrism").mouseleave(sidebarReset);
//Essence of Heresy
$("#essence_of_heresy").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Essence of Heresy",
                            "<span class='util'>Replace your Special Skill</span> with <span class='util'>Ruin</span>.<br><span class='dmg'>Dealing damage</span> adds a <span class='util'>stack of Ruin</span> for <span class='util'>10s</span> <span class='stack'>(+10 per stack)</span>. Activating the skill <span class='dmg'>detonates all stacks</span> dealing <span class='dmg'>300% damage +120% damage per stack of Ruin</span>. <span class='util'>Recharges after 8s</span> <span class='stack'>(+8s per stack)</span>."
                    );
});
$("#essence_of_heresy").mouseleave(sidebarReset);
//Eulogy Zero
$("#eulogy_zero").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Eulogy Zero",
                            "Items have a <span class='util'>5%</span> <span class='stack'>(+5% per stack)</span> <span class='util'>chance</span> to become a <span style='color:rgb(90, 160, 255);font-weight: bold'>Lunar</span> item instead."
                    );
});
$("#eulogy_zero").mouseleave(sidebarReset);
//Focused Convergence
$("#focused_convergence").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Focused Convergence",
                            "<span class='util'>Teleporters charge 30%</span> <span class='stack'>(+30% per stack)</span> <span class='util'>faster</span>, but the size of the <span class='util'>Teleporter zone</span> is <span class='hpLimit'>50%</span> <span class='stack'>(-50% per stack)</span> <span class='hpLimit'>smaller</span>."
                    );
});
$("#focused_convergence").mouseleave(sidebarReset);
//Gesture of the Drowned
$("#gesture_of_drowned").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Gesture of the Drowned",
                            "<span class='util'>Reduce Equipment cooldown</span> by <span class='util'>50%</span> <span class='stack'>(+15% per stack)</span>. <span class='util'>Equipment activates on cooldown</span>."
                    );
});
$("#gesture_of_drowned").mouseleave(sidebarReset);
//Hooks of Heresy
$("#hooks_of_heresy").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Hooks of Heresy",
                            "<span class='util'>Replace your Secondary Skill</span> with <span class='util'>Slicing Maelstrom</span>.<br><span class='dmg'>Charge a projectile</span> that deals <span class='dmg'>875% damage per second</span> to nearby enemies, exploding after <span class='util'>3s</span> to deal <span class='dmg'>700% damage</span> and <span class='util'>root enemies</span> for <span class='util'>3s</span> <span class='stack'>(+3s per stack)</span>. <span class='util'>Recharges after 5s</span> <span class='stack'>(+5s per stack)</span>."
                    );
});
$("#hooks_of_heresy").mouseleave(sidebarReset);
//Light Flux Pauldron
$("#light_flux_pauldron").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Light Flux Pauldron",
                            "Decrease <span class='util'>skill cooldowns</span> by <span class='util'>50% <span class='stack'>(+50% per stack)</span></span>. Decrease <span class='dmg'>attack speed</span> by <span class='dmg'>50% <span class='dmg'>(+50% per stack)</span></span>."
                    );
});
$("#light_flux_pauldron").mouseleave(sidebarReset);
//Mercurial Rachis
$("#mercurial_rachis").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Mercurial Rachis",
                            "Creates a <span class='util'>Ward of Power</span> in a <span class='util'>random location</span> nearby that <span class='util'>buffs all allies and enemies within 16m</span> <span class='stack'>(+50% per stack)</span>, causing them to deal <span class='dmg'>+50% damage</span>."
                    );
});
$("#mercurial_rachis").mouseleave(sidebarReset);
//Purity
$("#purity").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Purity",
                            "All <span class='util'>skill cooldowns</span> are reduced by <span class='util'>2s <span class='stack'>(+1s per stack)</span></span>. All <span class='util'>random effects</span> are <span class='util'>rolled +1<span class='stack'>(+1 per stack)</span> times</span> for an <span class='hpLimit'>unfavourable outcome</span>."
                    );
});
$("#purity").mouseleave(sidebarReset);
//Shaped Glass
$("#shaped_glass").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Shaped Glass",
                            "Increase <span class='dmg'>base damage</span> by <span class='dmg'>100% <span class='stack'>(+100% per stack)</span></span>. Reduce <span class='hpUP'>Maximum Health</span> by <span class='hpLimit'>50%<span class='stack'>(+50% per stack)</span></span>."
                    );
});
$("#shaped_glass").mouseleave(sidebarReset);
//Stone Flux Pauldron
$("#stone_flux_pauldron").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Stone Flux Pauldron",
                            "Increase <span class='hpUP'>Maximum Health</span> by <span class='hpUP'>100% <span class='stack'>(+100% per stack)</span></span>. Reduce <span class='util'>movement speed</span> by <span class='hpLimit'>50%<span class='stack'>(+50% per stack)</span></span>."
                    );
});
$("#stone_flux_pauldron").mouseleave(sidebarReset);
//Strides of Heresy
$("#strides_of_heresy").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Strides of Heresy",
                            "<span class='util'>Replace your Utility Skill</span> with <span class='util'>Shadowfade</span>.<br>Fade away, becoming <span class='util'>intangible</span> and gaining <span class='util'>+30% movement speed</span>. <span class='hpUP'>Heal</span> for <span class='hpUP'>18.2% <span class='stack'>(+18.2% per stack)</span></span> of your <span class='hpUP'>Maximum Health</span>. Lasts <span class='util'>3s <span class='stack'>(+3s per stack)</span></span>."
                    );
});
$("#strides_of_heresy").mouseleave(sidebarReset);
//Transcendence
$("#transcendence").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Transcendence",
                            "Gain <span class='hpUP'>+50% <span class='stack'>(+25% per stack)</span> Maximum Health</span>. Convert <span class='hpLimit'>all but 1 health</span> into <span class='hpUP'>regenerating shields</span>."
                    );
});
$("#transcendence").mouseleave(sidebarReset);
//Visions of Heresy
$("#visions_of_heresy").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Visions of Heresy",
                            "<span class='util'>Replace your Primary Skill</span> with <span class='util'>Hungering Gaze</span>.<br><span class='dmg'>Fire</span> a flurry of <span class='util'>tracking shards</span> that <span class='dmg'>detonate</span> after a delay, dealing <span class='dmg'>120% base damage</span>. Can hold up to <span class='util'>12 <span class='stack'>(+12 per stack)</span> charges</span> that reload after <span class='util'>2s <span class='stack'>(+2s per stack)</span></span>."
                    );
});
$("#visions_of_heresy").mouseleave(sidebarReset);
//------------------------------   VOID    ------------------------------------------
//Benthic Bloom
$("#benthic_bloom").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Benthic Bloom",
                            "<span class='corrupt'>Corrupts all 57 Leaf Clovers</span>.<br> <span class='util'>Upgrades 3</span> <span class='stack'>(+3 per stack)</span> <span class='util'>random items</span> to items of the next <span class='util'>rarity</span> at the <span class='util'>start of each stage</span>."
                    );
});
$("#benthic_bloom").mouseleave(sidebarReset);
//Encrusted Key
$("#encrusted_key").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Encrusted Key",
                            "<span class='corrupt'>Corrupts all Rusted Keys</span>.<br> Gain a key that opens a <span class='util'>hidden cache</span> containing an item (60%/<span class='hpUP'>30%</span>/<span class='hpLimit'>10%</span>) in a random location on <span class='util'>each future stage</span>. Opening the cache <span class='util'>consumes</span> this item."
                    );
});
$("#encrusted_key").mouseleave(sidebarReset);
//Lost Seer's Lenses
$("#lost_seers_lenses").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Lost Seer's Lenses",
                            "<span class='corrupt'>Corrupts all Lens-Maker's Glasses</span>.<br> Your attacks have a <span class='util'>0.5%</span> <span class='stack'>(+0.5% per stack)</span> <span class='util'>chance</span> to <span class='dmg'>instantly kill</span> a <span class='dmg'>non-boss enemy</span>."
                    );
});
$("#lost_seers_lenses").mouseleave(sidebarReset);
//Lysate Cell
$("#lysate_cell").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Lysate Cell",
                            "<span class='corrupt'>Corrupts all Fuel Cells</span>.<br> Add <span class='util'>+1</span> <span class='stack'>(+1 per stack)</span> <span class='util'>charge</span> of your <span class='util'>Special Skill</span>. <span class='util'>Reduces Special Skill cooldown</span> by <span class='util'>33%</span>."
                    );
});
$("#lysate_cell").mouseleave(sidebarReset);
//Needletick
$("#needletick").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Needletick",
                            "<span class='corrupt'>Corrupts all Tri-Tip Daggers</span>.<br> <span class='util'>+10% <span class='stack'>(+10% per stack)</span> chance</span> to <span class='dmg'>collapse</span> an enemy for <span class='dmg'>400% base damage</span>."
                    );
});
$("#needletick").mouseleave(sidebarReset);
//Newly Hatched Zoea
$("#newly_hatched_zoea").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Newly Hatched Zoea",
                            "<span class='corrupt'>Corrupts all <span style='color:rgb(230, 215, 40);font-weight: bold'>Boss</span> items</span>.<br> Every <span class='util'>60s</span> <span class='stack'>(-50% per stack)</span>, gain a <span class='util'>random <span class='corrupt'>Void</span> ally</span>. Can have up to <span class='util'>1 <span class='stack'>(+1 per stack)</span> allies</span> at a time."
                    );
});
$("#newly_hatched_zoea").mouseleave(sidebarReset);
//Plasma Shrimp
$("#plasma_shrimp").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Plasma Shrimp",
                            "<span class='corrupt'>Corrupts all AtG Missile Mk.1s</span>.<br> Gain a <span class='hpUP'>shield</span> equal to <span class='hpUP'>10%</span> of your <span class='hpUP'>Maximum Health</span>. While you have a <span class='hpUP'>shield</span>, <span class='dmg'>hitting an enemy</span> fires a <span class='dmg'>missile</span> that deals <span class='dmg'>40% <span class='stack'>(+40% per stack)</span> attack damage</span>."
                    );
});
$("#plasma_shrimp").mouseleave(sidebarReset);
//Pluripotent Larva
$("#pluripotent_larva").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Pluripotent Larva",
                            "<span class='corrupt'>Corrupts all Dio's Best Friends</span>.<br> <span class='hpLimit'>Upon death</span>, <span class='hpUP'>return to life</span> with <span class='hpUP'>3s of invulnerability</span>, <span class='corrupt'>corrupting all items</span> that can be. Item is <span class='util'>consumed</span> on use."
                    );
});
$("#pluripotent_larva").mouseleave(sidebarReset);
//Polylute
$("#polylute").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Polylute",
                            "<span class='corrupt'>Corrupts all Ukuleles</span>.<br> <span class='util'>25% chance</span> to fire <span class='dmg'>lightning</span> for <span class='dmg'>60% attack damage</span> up to <span class='dmg'>3 <span class='stack'>(+3 per stack)</span> times</span>."
                    );
});
$("#polylute").mouseleave(sidebarReset);
//Safer Spaces
$("#safer_spaces").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Safer Spaces",
                            "<span class='corrupt'>Corrupts all Tougher Times</span>.<br> <span class='hpUP'>Blocks</span> <span class='dmg'>incoming damage</span> once. <span class='util'>Recharges after 15s <span class='stack'>(-10% per stack)</span></span>."
                    );
});
$("#safer_spaces").mouseleave(sidebarReset);
//Singularity Band
$("#singularity_band").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Singularity Band",
                            "<span class='corrupt'>Corrupts all Runald's and Kjaro's Bands</span>.<br> When an attack deals <span class='dmg'>400% or more damage</span>, fire a <span class='util'>black hole</span> that <span class='util'>draws enemies within 15m into its center</span>, collapsing after <span class='util'>5s</span>, dealing <span class='dmg'>100% <span class='stack'>(+100% per stack)</span> attack damage</span>. <span class='util'>Recharges after 20s</span>."
                    );
});
$("#singularity_band").mouseleave(sidebarReset);
//Tentabauble
$("#tentabauble").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Tentabauble",
                            "<span class='corrupt'>Corrupts all Chronobaubles</span>.<br> <span class='util'>5% <span class='stack'>(+5% per stack)</span> chance</span> on hit to <span class='util'>root</span> enemies for <span class='util'>1s</span> <span class='stack'>(+1s per stack)</span>."
                    );
});
$("#tentabauble").mouseleave(sidebarReset);
//Voidsent Flame
$("#voidsent_flame").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Voidsent Flame",
                            "<span class='corrupt'>Corrupts all Will-o'-the-Wisps</span>.<br> Hitting <span class='dmg'>enemies at full health</span> spawns a <span class='dmg'>lava pillar</span> in a <span class='util'>12m <span class='stack'>(+2.4m per stack)</span> radius</span> for <span class='dmg'>260% <span class='stack'>(+156% per stack)</span> base damage</span>."
                    );
});
$("#voidsent_flame").mouseleave(sidebarReset);
//Weeping Fungus
$("#weeping_fungus").mouseenter(function(){
    sidebarReset();
    itemDisplay.call(this,  "Weeping Fungus",
                            "<span class='corrupt'>Corrupts all Bustling Fungus</span>.<br> <span class='hpUP'>Heals</span> for <span class='hpUP'>2% <span class='stack'>(+2% per stack)</span></span> of your <span class='hpUP'>Maximum Health</span> every second <span class='util'>while sprinting</span>."
                    );
});
$("#weeping_fungus").mouseleave(sidebarReset);

});
